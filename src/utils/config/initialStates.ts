import { UserRole } from 'types'

const initalUser = {
  displayName: '',
  email: '',
  premium: false,
  removed: false,
  password: '',
  uid: '',
  userRole: UserRole.USER,
  phoneNumber: '',
  address: ''
}

const initalExistUser = {
  email: '',
  password: '',
}

const initalForgotUser = {
  email: '',
}

const initalResetPassword = {
  password: '',
  confirmPassword: '',
}

const initalUpdatePassword = {
  password: '',
  confirmPassword: '',
  oldPassword: '',
}

const initalDeleteAccount = {
  password: '',
}

const initalAccountInfo = {
  displayName: '',
  email: '',
  phoneNumber: '',
  address: '',
  uid: '',
}

const initalNotificationSetting = {
  communication: true,
  newsletter: false,
  offer: true,
  push: true,
}

export {
  initalUser,
  initalExistUser,
  initalForgotUser,
  initalResetPassword,
  initalUpdatePassword,
  initalAccountInfo,
  initalDeleteAccount,
  initalNotificationSetting,
}
