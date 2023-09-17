import { images } from 'assets'
import Button from 'components/Buttons/Button'
import Textfiled from 'components/Input/Textfiled'
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast'
import { SecurityTabProps } from 'types'
import { initalUpdatePassword } from 'utils/config/initialStates'
import { updatePasswordSchema } from 'utils/config/schemas'
import { reauthenticateUser, updateUserPassword } from 'utils/firebase/functions'

const SecurityTab = (props: SecurityTabProps) => {
  const { securityRef } = props

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: initalUpdatePassword,
    validationSchema: updatePasswordSchema,
    onSubmit: (data, { resetForm }) => handleChangePassword(data, resetForm),
  })

  const ChangePasswordField = [
    {
      id: '1',
      type: 'password',
      label: 'Old password',
      name: 'oldPassword',
      value: values.oldPassword,
      error: !!touched.oldPassword ? errors.oldPassword : '',
      placeholder: '••••••••••••••••',
    },
    {
      id: '2',
      type: 'password',
      label: 'New password',
      name: 'password',
      value: values.password,
      error: !!touched.password ? errors.password : '',
      placeholder: '••••••••••••••••',
    },
    {
      id: '3',
      type: 'password',
      label: 'Confirm new password',
      name: 'confirmPassword',
      value: values.confirmPassword,
      error: !!touched.confirmPassword ? errors.confirmPassword : '',
      placeholder: '••••••••••••••••',
    },
  ]

  const handleChangePassword = async (
    userPasswords: { password: string; oldPassword: string },
    resetForm: any
  ) => {
    let reauthenciated: any = await reauthenticateUser(userPasswords.oldPassword)

    if (reauthenciated.error) return toast.error(reauthenciated.error)

    let updated: any = await updateUserPassword(userPasswords.password)

    if (updated.error) return toast.error(updated.error)

    resetForm()
    setSubmitting(false)
    toast.success('updated')
  }

  return (
    <div
      ref={securityRef}
      className='w-full py-4 md:py-0 md:w-[68%] lg:w-[55%] xl:w-[40%] px-4 gap-12 flex flex-col'
    >
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='text-lg font-medium'>Password and Security</div>
        {ChangePasswordField.map((field) => (
          <Textfiled key={field.id} {...field} onChange={handleChange} onBlur={handleBlur} />
        ))}
        <div className='text-sm text-gray-500'>
          Make sure it's at least 15 characters OR at least 8 characters including a number and a
          lowercase letter.
        </div>
        <Button
          text='Update Password'
          submitLoading={isSubmitting}
          type='submit'
          className='bg-black hover:border-black text-white lg:w-fit'
        />
      </form>
      <div className='flex flex-col gap-6'>
        <div className='text-lg font-medium'>Two-factor authentication</div>
        <div className='flex flex-col'>
          <img
            src={images.under_construction}
            className='w-[70%] aspect-square self-center'
            alt=''
          />
          <div className=' text-gray-600 self-center'>Under Construction</div>
        </div>
      </div>
    </div>
  )
}

export default SecurityTab
