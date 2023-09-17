import { auth, db } from './firbaseConfig'
import { toast } from 'react-hot-toast'
import { UpdateCurrentUserProps } from 'types'
import {
  applyActionCode,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  signOut,
  updateProfile,
  deleteUser,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from '@firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  QueryConstraint,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { getFirebaseErrorMessage } from 'api/users'

const registerUser = async (email: string, password: string, name: string) => {
  try {
    const createdUser = (await createUserWithEmailAndPassword(auth, email, password)).user

    await updateCurrentUser({ displayName: name })

    return {
      email: createdUser.email,
      displayName: name,
      emailVerified: createdUser.emailVerified,
      isAnonymous: createdUser.isAnonymous,
      phoneNumber: createdUser.phoneNumber,
      photoURL: createdUser.photoURL,
      uid: createdUser.uid,
    }
  } catch (error: any) {
    return { error: error.code }
  }
}

const sendVerificationEmail = async () => {
  try {
    if (!auth.currentUser) return { error: 'You need to login first to resend.' }

    await sendEmailVerification(auth.currentUser)

    toast.success('Mail sent.')
    return true
  } catch (error: any) {
    toast.error(error?.code)
    return { error: error.code }
  }
}

const sendResetPasswordEmail = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)

    toast.success('Mail sent.')
    return true
  } catch (error: any) {
    toast.error(error?.code)
    return { error: error.code }
  }
}

const verifyEmail = async (actionCode: string) => {
  try {
    let verify = await applyActionCode(auth, actionCode)

    console.log(verify)

    return { success: true }
  } catch (error: any) {
    return { error: error.code }
  }
}

const resetPassword = async (actionCode: string, newPassword: string) => {
  try {
    let email: any = await verifyPasswordResetCode(auth, actionCode)

    if (email.code) return { error: email.code }

    let response = await confirmPasswordReset(auth, actionCode, newPassword)

    return { response: response }
  } catch (error: any) {
    return { error: error.code }
  }
}

const authenticiateUser = async (email: string, password: string) => {
  try {
    const authenticiatedUser = (await signInWithEmailAndPassword(auth, email, password)).user
    return {
      email: authenticiatedUser.email,
      displayName: authenticiatedUser.displayName,
      emailVerified: authenticiatedUser.emailVerified,
      isAnonymous: authenticiatedUser.isAnonymous,
      phoneNumber: authenticiatedUser.phoneNumber,
      photoURL: authenticiatedUser.photoURL,
      uid: authenticiatedUser.uid,
    }
  } catch (error: any) {
    return { error: error.code }
  }
}

const updateCurrentUser = async (userDetail: UpdateCurrentUserProps) => {
  try {
    !!auth?.currentUser && (await updateProfile(auth.currentUser, userDetail))

    return true
  } catch (error: any) {
    return { error: error.code }
  }
}

const deleteCurrentUser = async () => {
  try {
    !!auth?.currentUser && (await deleteUser(auth.currentUser))

    return true
  } catch (error: any) {
    return { error: error.code }
  }
}

const reauthenticateUser = async (currentPassword: string) => {
  try {
    let crd = !!auth.currentUser?.email
      ? EmailAuthProvider.credential(auth.currentUser?.email, currentPassword)
      : null
    !!auth.currentUser && crd && (await reauthenticateWithCredential(auth.currentUser, crd))
    return true
  } catch (error: any) {
    return { error: getFirebaseErrorMessage(error.code) }
  }
}

const updateUserPassword = async (password: string) => {
  try {
    !!auth?.currentUser && (await updatePassword(auth.currentUser, password))

    return true
  } catch (error: any) {
    return { error: getFirebaseErrorMessage(error.code) }
  }
}

const logoutUser = () => {
  try {
    signOut(auth)
  } catch (error) {
    return error
  }
}

const authHandler = (callbackSucess: Function, callbackError: Function) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callbackSucess({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
      })
    } else {
      callbackError()
    }
  })
}

const getDocuments = async (collectionName: string, queries: QueryConstraint[] = []) => {
  try {
    const collectionRef = collection(db, collectionName)
    const collectionQuery = query(collectionRef, ...queries)
    const querySnapshot = await getDocs(collectionQuery)
    let documents: any = []
    querySnapshot.forEach((doc) => {
      documents.push(doc.data())
    })
    return documents
  } catch (error: any) {
    return { error: error.code }
  }
}

const getDocument = async (collectionName: string, pathSegments: any) => {
  try {
    const document = doc(db, collectionName, pathSegments)
    const docSnap = await getDoc(document)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log('No such document!')
      return { error: 'No such document!' }
    }
  } catch (error: any) {
    return { error: error.code }
  }
}

const setDocument = async (collectionName: string, uid: string, object: object) => {
  try {
    let document = await setDoc(doc(db, collectionName, uid), object)
    console.log(document)
    return true
  } catch (error: any) {
    return { error: error.code }
  }
}

const updateDocument = async (collectionName: string, uid: string, object: object) => {
  try {
    await updateDoc(doc(db, collectionName, uid), object)
    return true
  } catch (error: any) {
    return { error: error.code }
  }
}

export {
  getDocuments,
  setDocument,
  registerUser,
  authenticiateUser,
  authHandler,
  getDocument,
  logoutUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  resetPassword,
  verifyEmail,
  updateCurrentUser,
  updateDocument,
  deleteCurrentUser,
  reauthenticateUser,
  updateUserPassword
}
