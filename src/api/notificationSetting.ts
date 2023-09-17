import { toast } from 'react-hot-toast'
import { setUserNotificationSetting } from 'redux/slices/notificationSlice'
import { NotificationSettingsProps } from 'types'
import { initalNotificationSetting } from 'utils/config/initialStates'
import { getDocument, setDocument, updateDocument } from 'utils/firebase/functions'

const fetchNotificationSetting = async (userID: string, dispatch: Function) => {
  let notificationSetting: any = await getDocument('NotificationSettings', userID)

  if (notificationSetting.error === 'No such document!')
    return setNotificationSetting(userID, initalNotificationSetting, dispatch)

  if (notificationSetting.error)
    return toast.error(notificationSetting.error || 'Something went wrong.')

  dispatch(setUserNotificationSetting(notificationSetting))
}

const setNotificationSetting = async (
  userID: string,
  notification: NotificationSettingsProps,
  dispatch: Function
) => {
  let notificationSetting: any = await setDocument('NotificationSettings', userID, notification)

  if (notificationSetting.error)
    return toast.error(notificationSetting.error || 'Something went wrong.')

  fetchNotificationSetting(userID, dispatch)
}

const updateNotificationSetting = async (
  userID: string,
  newNotificationSetting: NotificationSettingsProps,
  dispatch: Function
) => {
  let notificationSetting: any = await updateDocument(
    'NotificationSettings',
    userID,
    newNotificationSetting
  )

  if (notificationSetting.error)
    return toast.error(notificationSetting.error || 'Something went wrong.')

  fetchNotificationSetting(userID, dispatch)
}

export { fetchNotificationSetting, updateNotificationSetting, setNotificationSetting }
