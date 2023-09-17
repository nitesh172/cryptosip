import { AddUserProps } from 'types'
import { createUser } from 'api/users'
import { images } from 'assets'
import { initalUser } from 'utils/config/initialStates'
import { registerUserSchema } from 'utils/config/schemas'
import { toast } from 'react-hot-toast'
import { useAppDispatch } from 'hooks/redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Buttons/Button'
import TextButton from 'components/Buttons/TextButton'
import Textfiled from 'components/Input/Textfiled'

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initalUser,
      validationSchema: registerUserSchema,
      onSubmit: (data) => handleGetStarted(data),
    })

  const SignupFormField = [
    {
      id: '1',
      type: 'text',
      name: 'displayName',
      label: 'Name',
      value: values.displayName,
      error: !!touched.displayName ? errors.displayName : '',
      placeholder: 'Enter your name',
      className: 'mb-5',
    },
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
      placeholder: 'Create a password',
      className: 'mb-8',
    },
  ]

  const handleGetStarted = async (userDetails: AddUserProps) => {
    let user = await createUser(userDetails, dispatch)

    if (user.error) return toast.error(user.error)
  }

  return (
    <div className='h-full px-6 py-12 md:px-32 lg:px-24 xl:px-40 flex-1 flex flex-col md:justify-center lg:overflow-hidden overflow-x-hidden'>
      <img
        src={images.Logo}
        alt=''
        onClick={() => navigate('/')}
        className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer lg:hidden mb-6'
      />
      <div className='text-2xl font-semibold mb-3'>Sign up</div>
      <div className='text-base mb-8'>Welcome back! Please enter your details.</div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        {SignupFormField.map((field) => (
          <Textfiled key={field.id} {...field} onChange={handleChange} onBlur={handleBlur} />
        ))}
        <Button
          text='Get started'
          type='submit'
          submitLoading={isSubmitting}
          className='bg-black text-white border-black hover:border-black mb-6'
        />
      </form>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <div className='text-sm font-normal'>Already have an account?</div>
        <TextButton
          text='Login'
          className='text-sm font-semibold'
          onClick={() => navigate('/login')}
        />
      </div>
    </div>
  )
}
export default SignupForm
