import { AddUserProps, CurrentUserProps, UpdateCurrentUserProps, UserProps } from 'types'
import { FirebaseError } from 'utils/firebase/error'
import { setAuthenticate, setCurrentUser, setUserDetails, setUsers } from 'redux/slices/userSlice'
import { where } from '@firebase/firestore'
import {
  authenticiateUser,
  authHandler,
  getDocuments,
  registerUser,
  sendVerificationEmail,
  setDocument,
  verifyEmail,
  getDocument,
  updateDocument,
} from 'utils/firebase/functions'

const fetchUsers = async (dispatch: Function) => {
  let data = await getDocuments('Users', [where('removed', '!=', true)])
  dispatch(setUsers(data))
}

const fetchUser = async (userId: string, dispatch: Function) => {
  let data = (await getDocument('Users', userId)) as UserProps
  dispatch(setUserDetails(data))
}

const createUser = async (user: AddUserProps, dispatch: Function) => {
  const registeredUser: any = await registerUser(user.email, user.password, user.displayName)

  if (registeredUser.error) return { error: getFirebaseErrorMessage(registeredUser.error) }

  if (!!registeredUser && !registeredUser.emailVerified) await sendVerificationEmail()

  let userDetail: any = { ...user }
  userDetail.uid = registeredUser.uid
  delete userDetail.password

  dispatch(setCurrentUser(registeredUser))

  let createdUser: any = await setDocument('Users', registeredUser.uid, userDetail)

  if (createdUser.error) return { error: getFirebaseErrorMessage(createdUser.error) }

  return registeredUser
}

const loginUser = async (user: any, dispatch: Function) => {
  const logedUser: any = await authenticiateUser(user.email, user.password)

  if (logedUser.error) return { error: getFirebaseErrorMessage(logedUser.error) }

  dispatch(setCurrentUser(logedUser))

  return logedUser
}

const handleVerifyEmail = async (actionCode: string) => {
  const verified: any = await verifyEmail(actionCode)

  if (verified.success) return { success: true }

  if (verified.error) {
    return { error: getFirebaseErrorMessage(verified.error) }
  }
}

const listenToAuthChanges = () => (dispatch: Function) => {
  const callbackSucess = async (user: CurrentUserProps) => {
    dispatch(setAuthenticate(true))
    dispatch(setCurrentUser(user))
    fetchUser(user.uid, dispatch)
  }
  const callbackError = () => {
    dispatch(setAuthenticate(false))
    dispatch(setCurrentUser(null))
  }

  authHandler(callbackSucess, callbackError)
}

const updateUser = async (user: UpdateCurrentUserProps, dispatch: Function) => {
  let uid = user.uid || ''

  let updateUserDetails: any = await updateDocument('Users', uid, user)

  if (updateUserDetails.error) return { error: updateUserDetails.error }

  dispatch(setUserDetails(updateUserDetails as UserProps))

  return updateUserDetails as UserProps
}

export const getFirebaseErrorMessage = (code: string) => {
  var message = null

  switch (code) {
    case 'auth/user-not-found':
      message = FirebaseError.USER_NOT_FOUND
      break
    case 'auth/email-already-exists':
      message = FirebaseError.EMAIL_ALREADY_EXIST
      break
    case 'auth/email-already-in-use':
      message = FirebaseError.EMAIL_ALREADY_USE
      break
    case 'auth/internal-error':
      message = FirebaseError.INTERNAL_ERROR
      break
    case 'auth/invalid-credential':
      message = FirebaseError.INVALID_CREDENTIAL
      break
    case 'auth/invalid-email':
      message = FirebaseError.INVALID_EMAIL_FORMAT
      break
    case 'auth/invalid-password':
      message = FirebaseError.INVALID_PASSWORD_FORMAT
      break
    case 'auth/too-many-requests':
      message = FirebaseError.TOO_MANY_ATTEMPTS_TRY_LATER
      break
    case 'auth/user-disabled':
      message = FirebaseError.USER_DISABLED
      break
    case 'auth/wrong-password':
      message = FirebaseError.PASSWORD_WRONG
      break
    case 'auth/weak-password':
      message = FirebaseError.PASSWORD_WEAK
      break
    case 'auth/invalid-api-key':
      message = FirebaseError.INVALID_API_KEY
      break
    case 'auth/invalid-action-code':
      message = FirebaseError.INVALID_ACTION_CODE
      break
    default:
      console.log(code)
      message = code
      break
  }
  return message
}

export {
  fetchUsers,
  createUser,
  loginUser,
  listenToAuthChanges,
  handleVerifyEmail,
  fetchUser,
  updateUser,
}
