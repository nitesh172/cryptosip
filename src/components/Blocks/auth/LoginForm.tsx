import { ExistingUserProps } from 'types'
import { images } from 'assets'
import { initalExistUser } from 'utils/config/initialStates'
import { loginUser } from 'api/users'
import { loginUserSchema } from 'utils/config/schemas'
import { toast } from 'react-hot-toast'
import { useAppDispatch } from 'hooks/redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Buttons/Button'
import TextButton from 'components/Buttons/TextButton'
import Textfiled from 'components/Input/Textfiled'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initalExistUser,
      validationSchema: loginUserSchema,
      onSubmit: (data) => handleLogin(data),
    })

  const LoginFormField = [
    {
      id: '2',
      type: 'email',
      label: 'Email',
      name: 'email',
      value: values.email,
      error: !!touched.email ? errors.email : '',
      placeholder: 'Enter your email',
      className: 'mb-5',
    },
    {
      id: '3',
      type: 'password',
      label: 'Password',
      name: 'password',
      value: values.password,
      error: !!touched.password ? errors.password : '',
      placeholder: '••••••••••••••••',
      className: 'mb-6',
    },
  ]

  const handleLogin = async (userDetails: ExistingUserProps) => {
    let user = await loginUser(userDetails, dispatch)

    if (user.error) return toast.error(user.error)
  }

  return (
    <div className='h-full px-6 py-12 md:px-32 lg:px-24 xl:px-40 flex-1 flex flex-col md:justify-center lg:overflow-hidden overflow-x-hidden'>
      <img
        src={images.Logo}
        onClick={() => navigate('/')}
        alt=''
        className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer lg:hidden mb-6'
      />
      <div className='text-2xl font-semibold mb-3'>Welcome back</div>
      <div className='text-base mb-8'>Welcome back! Please enter your details.</div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        {LoginFormField.map((field) => (
          <Textfiled key={field.id} {...field} onChange={handleChange} onBlur={handleBlur} />
        ))}
        <TextButton
          text='Forgot password'
          onClick={() => navigate('/forgot-password')}
          className='self-end mb-6'
        />
        <Button
          text='Login'
          type='submit'
          submitLoading={isSubmitting}
          className='bg-black text-white border-black hover:border-black mb-6'
        />
      </form>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <div className='text-sm font-normal'>Don’t have an account?</div>
        <TextButton
          text='Sign up'
          className='text-sm font-semibold'
          onClick={() => navigate('/signup')}
        />
      </div>
    </div>
  )
}

export default LoginForm
