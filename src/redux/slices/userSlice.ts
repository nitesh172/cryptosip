import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserProps } from "types"

export interface AirdropState {
  users: UserProps[]
  currentUser: UserProps | null
  isAuthenticate: boolean | null
}

const initialState: AirdropState = {
  users: [],
  currentUser: null,
  isAuthenticate: null
}

export const userSlice = createSlice({
  name: "airdrops",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserProps[]>) => {
      state.users = action.payload
    },
    setCurrentUser: (state, action: PayloadAction<UserProps | null>) => {
      state.currentUser = action.payload
    },
    setAuthenticate: (state, action: PayloadAction<boolean | null>) => {
      state.isAuthenticate = action.payload
    },
  },
})

export const { setUsers, setCurrentUser, setAuthenticate } = userSlice.actions

export default userSlice.reducer
