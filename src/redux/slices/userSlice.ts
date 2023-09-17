import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CurrentUserProps, UserProps } from 'types'

export interface AirdropState {
  users: UserProps[]
  currentUser: CurrentUserProps | null,
  isAuthenticate: boolean | null,
  userDetails: UserProps | null
}

const initialState: AirdropState = {
  users: [],
  currentUser: null,
  isAuthenticate: null,
  userDetails: null
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserProps[]>) => {
      state.users = action.payload
    },
    setCurrentUser: (state, action: PayloadAction<CurrentUserProps | null>) => {
      state.currentUser = action.payload
    },
    setAuthenticate: (state, action: PayloadAction<boolean | null>) => {
      state.isAuthenticate = action.payload
    },
    setUserDetails: (state, action: PayloadAction<UserProps | null>) => {
      state.userDetails = action.payload
    },
  },
})

export const { setUsers, setCurrentUser, setAuthenticate, setUserDetails } = userSlice.actions

export default userSlice.reducer
