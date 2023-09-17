import { updateUser } from 'api/users'
import Button from 'components/Buttons/Button'
import TextButton from 'components/Buttons/TextButton'
import TextArea from 'components/Input/TextArea'
import Textfiled from 'components/Input/Textfiled'
import PopupEncloser from 'components/PopupEncloser/PopupEncloser'
import DeletePopup from 'components/Popups/DeletePopup'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { AccountTabProps, UpdateCurrentUserProps } from 'types'
import { initalAccountInfo } from 'utils/config/initialStates'
import { accountInfoSchema } from 'utils/config/schemas'

const AccountTab = (props: AccountTabProps) => {
  const { accountRef } = props
  const { currentUser, userDetails } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setValues,
    setSubmitting,
  } = useFormik({
    initialValues: initalAccountInfo,
    validationSchema: accountInfoSchema,
    onSubmit: (data) => {
      if (edit) {
        handleUpdate(data)
      }
      setSubmitting(false)
    },
  })

  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)

  const AccountInfoField = [
    {
      id: '1',
      type: 'text',
      label: 'Name',
      name: 'displayName',
      value: values.displayName,
      error: !!touched.displayName ? errors.displayName : '',
      isDisabled: true,
    },
    {
      id: '2',
      type: 'email',
      label: 'Email',
      name: 'email',
      value: values.email,
      error: !!touched.email ? errors.email : '',
      isDisabled: true,
    },
    {
      id: '3',
      type: 'text',
      label: 'Phone Number',
      name: 'phoneNumber',
      value: values.phoneNumber,
      error: !!touched.phoneNumber ? errors.phoneNumber : '',
      isDisabled: !edit,
    },
  ]

  const handleUpdate = async (updateUserDetails: UpdateCurrentUserProps) => {
    let updatedUser: any = await updateUser(updateUserDetails, dispatch)

    if (updatedUser.error) return toast.error('Error User Not updated' + updatedUser.error)

    setEdit(false)

    toast.success('User updated')
  }

  useEffect(() => {
    userDetails?.uid &&
      setValues({
        address: userDetails.address,
        displayName: currentUser?.displayName || '',
        email: currentUser?.email || '',
        phoneNumber: userDetails.phoneNumber || '',
        uid: userDetails.uid,
      })
  }, [userDetails])

  const close = () => setShow(false)

  return (
    <div
      ref={accountRef}
      className='w-full py-4 md:py-0 md:w-[68%] lg:w-[55%] xl:w-[40%] px-4 gap-12 flex flex-col'
    >
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-lg font-medium'>Account Information</div>
          <TextButton
            text={edit ? 'Discard' : 'Edit'}
            className='text-sm text-gray-600'
            onClick={() => setEdit(!edit)}
          />
        </div>
        {AccountInfoField.map((field) => (
          <Textfiled key={field.id} {...field} onChange={handleChange} onBlur={handleBlur} />
        ))}
        <TextArea
          name='address'
          isDisabled={!edit}
          value={values?.address || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          label='Address'
        />
        <Button
          submitLoading={isSubmitting}
          type='submit'
          text='Save'
          className='bg-black hover:border-black text-white w-fit'
        />
      </form>
      <div className='flex flex-col gap-4'>
        <div className='text-base font-medium'>Delete account</div>
        <div className='text-sm text-gray-500'>
          Once you delete your account, there is no going back. Please be certain.
        </div>
        <Button
          text='Delete your Account'
          onClick={() => setShow(true)}
          className='bg-black hover:border-black text-white w-fit'
        />
        <PopupEncloser show={show} children={<DeletePopup close={close} />} close={close} />
      </div>
    </div>
  )
}

export default AccountTab
