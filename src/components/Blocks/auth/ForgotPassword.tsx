import { images } from 'assets'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Buttons/Button'
import TextButton from 'components/Buttons/TextButton'
import Textfiled from 'components/Input/Textfiled'
import { sendResetPasswordEmail } from 'utils/firebase/functions'
import { useFormik } from 'formik'
import { initalForgotUser } from 'utils/config/initialStates'
import { forgotUserSchema } from 'utils/config/schemas'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: initalForgotUser,
    validationSchema: forgotUserSchema,
    onSubmit: (data) => resendLink(data),
  })

  const resendLink = async ({ email }: { email: string }) => {
    await sendResetPasswordEmail(email)
  }

  return (
    <div className='px-6 py-12 md:px-32 lg:px-24 xl:px-40 flex-1 flex flex-col md:justify-center lg:overflow-hidden overflow-x-hidden'>
      <img
        src={images.Logo}
        onClick={() => navigate('/')}
        alt=''
        className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer xl:hidden mb-6'
      />
      <div className='text-2xl font-semibold mb-3'>Forgot password?</div>
      <div className='text-base mb-8'>No worries, we’ll send you reset instructions.</div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <Textfiled
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          className='mb-6'
          value={values.email}
          error={!!touched.email && !!errors.email ? errors.email : ''}
          onBlur={handleBlur}
          placeholder='Enter your email'
        />
        <Button
          text='Reset password'
          type='submit'
          submitLoading={isSubmitting}
          className='bg-black text-white border-black hover:border-black mb-8'
        />
      </form>
      <TextButton
        text='Back to log in'
        className='text-sm font-semibold self-center'
        Icon={<BiLeftArrowAlt />}
        onClick={() => navigate('/login')}
      />
    </div>
  )
}

export default ForgotPassword
