import { where } from "@firebase/firestore"
import { setAuthenticate, setCurrentUser, setUsers } from "redux/slices/userSlice"
import { UserProps } from "types"
import {
  authHandler,
  authenticiateUser,
  getDocument,
  getDocuments,
  registerUser,
  setDocument,
} from "utils/firebase/functions"

const fetchUsers = async (dispatch: Function) => {
  let data = await getDocuments("Users", [where("removed", "!=", true)])
  dispatch(setUsers(data))
}

const createUser = async (user: any, dispatch: Function) => {
  const registeredUser: any = await registerUser(user.email, user.password)
  let userDetail = { ...user }
  userDetail.uid = registeredUser.uid
  delete userDetail.password
  let createdUser = (await setDocument(
    "Users",
    registeredUser.uid,
    userDetail
  )) as unknown as UserProps
  dispatch(setCurrentUser(createdUser))
}

const loginUser = async (user: any, dispatch: Function) => {
  const logedUser: any = await authenticiateUser(user.email, user.password)
  let authenticiatedUser = (await getDocument("Users", logedUser.uid)) as unknown as UserProps
  dispatch(setCurrentUser(authenticiatedUser))
}

const listenToAuthChanges = () => (dispatch: Function) => {
  const callbackSucess = async (user: any) => {
    dispatch(setAuthenticate(true))
    let getUser = (await getDocument("Users", user.uid)) as unknown as UserProps
    dispatch(setCurrentUser(getUser))
  }
  const callbackError = () => {
    dispatch(setAuthenticate(false))
    dispatch(setCurrentUser(null))
  }

  authHandler(callbackSucess, callbackError)
}

export { fetchUsers, createUser, loginUser, listenToAuthChanges }
