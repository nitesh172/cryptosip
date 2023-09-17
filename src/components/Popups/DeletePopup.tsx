import Button from 'components/Buttons/Button'
import Textfiled from 'components/Input/Textfiled'
import { useFormik } from 'formik'
import { initalDeleteAccount } from 'utils/config/initialStates'
import { deleteAccountSchema } from 'utils/config/schemas'

const DeletePopup = ({ close }: { close: Function }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initalDeleteAccount,
      validationSchema: deleteAccountSchema,
      onSubmit: (data) => {},
    })

  return (
    <form
      onSubmit={handleSubmit}
      className=' bg-white p-3 md:p-5 flex flex-col w-[100%] lg:w-[500px]'
    >
      <div className='font-medium text-base md:text-lg mb-4'>Confirmation Required</div>
      <div className='text-sm md:text-base text-gray-500 mb-2'>
        Are you sure you want to delete account?
      </div>
      <Textfiled
        label='To confirm, enter password in below'
        type='password'
        className='mb-4'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='••••••••••••••••••••••••'
        name='password'
        error={!!touched.password ? errors.password : ''}
      />
      <div className='flex flex-row gap-2'>
        <Button
          text='Delete'
          type='submit'
          submitLoading={isSubmitting}
          small
          className='bg-black text-white hover:border-black'
        />
        <Button text='Close' small type='button' onClick={close} />
      </div>
    </form>
  )
}

export default DeletePopup
