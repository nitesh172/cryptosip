import { BsEnvelopeCheck, BsEnvelopeX } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
import { handleVerifyEmail } from 'api/users'
import { toast } from 'react-hot-toast'
import { useEffect, useRef, useState } from 'react'
import Button from 'components/Buttons/Button'
import useQuery from 'hooks/useQuery'
import { sendVerificationEmail } from 'utils/firebase/functions'
import { useNavigate } from 'react-router-dom'

const EmailVerification = () => {
  const query = useQuery()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean | null>(null)
  const [error, setError] = useState<boolean>(false)

  const initialized = useRef(false)

  let actionCode = query.get('oobCode')

  const verify = async (actionCode: string) => {
    setIsLoading(true)
    let response: any = await handleVerifyEmail(actionCode)

    if (response.success) return setIsLoading(false)

    if (response?.error) {
      setError(true)
      toast.error(response.error)
      return setIsLoading(false)
    }
  }

  const handleContinue = async () => {
    if (!error) return navigate('/')

    let mailSent: any = await sendVerificationEmail()

    if (mailSent.error) return toast.error(mailSent.error)
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      
      if (!!actionCode) verify(actionCode)
    }
  }, [])

  return !isLoading && isLoading !== null ? (
    <div className='px-6 py-12 md:px-32 lg:px-24 xl:px-40 h-full flex-1 flex flex-col items-center md:justify-center lg:overflow-hidden overflow-x-hidden'>
      <div className='p-3 border text-xl mb-4'>
        {!!actionCode && error ? <BsEnvelopeX /> : <BsEnvelopeCheck />}
      </div>
      <div className='text-3xl md:text-4xl font-semibold mb-3 text-center'>
        {!!actionCode && error ? 'Email verification link expired' : 'Email verified'}
      </div>
      {!!actionCode && !error ? (
        <div className='text-base mb-8 text-center'>
          Your email has been successfully verified. <br /> Click below to continue in magically.
        </div>
      ) : (
        error && (
          <div className='text-base mb-8 text-center'>
            Look like the verification link has expired. Not to worry, we can send the link again.
          </div>
        )
      )}
      <Button
        text={!!actionCode && !error ? 'Continue' : 'Resend Link'}
        onClick={handleContinue}
        className='bg-black text-white border-black hover:border-black mb-6'
      />
    </div>
  ) : !!isLoading ? (
    <div className='flex flex-col items-center justify-center h-screen flex-1'>
      <CgSpinner className='animate-spin' size={60} />
    </div>
  ) : (
    <></>
  )
}

export default EmailVerification
