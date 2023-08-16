import { configureStore } from "@reduxjs/toolkit"
import airdropSlice from "./slices/airdropSlice"
import userSlice from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    airdropReducer: airdropSlice,
    userReducer: userSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
