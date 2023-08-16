import {
  QueryConstraint,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore"
import { db, auth } from "./firbaseConfig"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth"

const registerUser = async (email: string, password: string) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(auth, email, password)
    return createdUser.user
  } catch (error) {
    return error
  }
}

const authenticiateUser = async (email: string, password: string) => {
  try {
    const authenticiatedUser = await signInWithEmailAndPassword(auth, email, password)
    return authenticiatedUser.user
  } catch (error) {
    return error
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
      callbackSucess(user)
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
  } catch (error) {
    console.log("err", error)
    return error
  }
}

const getDocument = async (collectionName: string, pathSegments: any) => {
  try {
    const document = doc(db, collectionName, pathSegments)
    const docSnap = await getDoc(document)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!")
    }
  } catch (error) {
    console.log("err", error)
    return error
  }
}

const setDocument = async (collectionName: string, uid: string, object: object) => {
  try {
    let document = await setDoc(doc(db, collectionName, uid), object)
    return document
  } catch (error) {
    return error
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
}
