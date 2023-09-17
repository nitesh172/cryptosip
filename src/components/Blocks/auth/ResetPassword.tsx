import useQuery from 'hooks/useQuery'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { initalResetPassword } from 'utils/config/initialStates'
import { resetPasswordSchema } from 'utils/config/schemas'
import { resetPassword } from 'utils/firebase/functions'
import { useFormik } from 'formik'
import { Button, Textfiled } from 'components'
import { BiLock } from 'react-icons/bi'

const ResetPassword = () => {
  const query = useQuery()
  const navigate = useNavigate()

  let actionCode = query.get('oobCode')

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initalResetPassword,
      validationSchema: resetPasswordSchema,
      onSubmit: (data) => resetHandle(data),
    })

  const resetHandle = async (data: any) => {
    let response: any = !!actionCode
      ? await resetPassword(actionCode, data.password)
      : { error: 'Token not present.' }

    if (response.error) {
      return toast.error(response.error)
    }

    toast.success('Password reset successfully.')

    navigate('/login')
  }

  return (
    <div className='px-6 py-12 md:px-28 lg:px-20 xl:px-28 h-full flex-1 flex flex-col items-center md:justify-center lg:overflow-hidden overflow-x-hidden'>
      <div className='p-3 border text-xl mb-4'>
        <BiLock />
      </div>
      <div className='text-3xl md:text-4xl font-semibold mb-3 text-center'>Set new password</div>
      <div className='text-base mb-8 text-center'>
        Your new password must be different to previously used passwords.
      </div>
      <form
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
        className='flex flex-col w-full md:w-96'
      >
        <Textfiled
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          className='mb-6'
          value={values.password}
          error={!!touched.password && !!errors.password ? errors.password : ''}
          onBlur={handleBlur}
          placeholder='Enter your password'
        />
        <Textfiled
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          className='mb-10'
          value={values.confirmPassword}
          error={
            !!touched.confirmPassword && !!errors.confirmPassword ? errors.confirmPassword : ''
          }
          onBlur={handleBlur}
          placeholder='Enter your confirm password'
        />
        <Button
          text='Reset Password'
          type='submit'
          submitLoading={isSubmitting}
          className='bg-black text-white border-black hover:border-black mb-6 w-full'
        />
      </form>
    </div>
  )
}

export default ResetPassword
