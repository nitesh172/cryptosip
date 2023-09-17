import { fetchNotificationSetting, updateNotificationSetting } from 'api/notificationSetting'
import Switch from 'components/Switch/Switch'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect, useRef } from 'react'
import { NotificationTabProps } from 'types'

const NotificationTab = (props: NotificationTabProps) => {
  const { notificationRef } = props
  const ref = useRef<any>(false)
  const { currentUser } = useAppSelector((state) => state.userReducer)
  const { notificationSetting } = useAppSelector((state) => state.notificationReducer)
  const dispatch = useAppDispatch()

  const fetchSetting = async () => {
    currentUser?.uid &&
      notificationSetting === null &&
      (await fetchNotificationSetting(currentUser?.uid, dispatch))
  }

  const NotificatioSettingFiled = [
    {
      name: 'communication',
      label: 'Communication Email',
      description: 'Receive email for message, contact and document.',
      value: notificationSetting?.communication,
    },
    {
      name: 'newsletter',
      label: 'Newsletter Email',
      description: 'Receive email for message, contact and document.',
      value: notificationSetting?.newsletter,
    },
    {
      name: 'offer',
      label: 'Offer & Rewards Email',
      description: 'Receive email for message, contact and document.',
      value: notificationSetting?.offer,
    },
    {
      name: 'push',
      label: 'Push Notification',
      description: 'Receive email for message, contact and document.',
      value: notificationSetting?.push,
    },
  ]

  const toggleNotification = async (name: string, value: boolean) => {
    currentUser?.uid &&
      notificationSetting &&
      updateNotificationSetting(
        currentUser?.uid,
        { ...notificationSetting, [name]: !value },
        dispatch
      )
  }

  useEffect(() => {
    if (!ref.current) {
      fetchSetting()
      ref.current = true
    }
  }, [ref])

  return (
    <div
      ref={notificationRef}
      className='w-full py-4 md:py-0 md:w-[68%] lg:w-[55%] xl:w-[40%] px-4 gap-6 flex flex-col'
    >
      <div className='text-xl font-medium'>Notification</div>
      <div className='flex flex-col gap-2'>
        <div className='text-lg font-medium'>Account Notications</div>
        <div className='text-sm text-gray-500'>
          We will send you notifictions to inform you any updates and/or changes events occur for
          you in Cryotosip. Select which notification you want to receive below:
        </div>
      </div>
      {NotificatioSettingFiled.map((field, index) => {
        return (
          <div className='flex flex-col gap-2' key={index}>
            <div className='text-base font-medium'>{field.label}</div>
            <div className='text-sm text-gray-500'>{field.description}</div>
            <Switch
              value={field.value}
              name='communication'
              onChange={() =>
                field.value !== undefined && toggleNotification(field.name, field.value)
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default NotificationTab
