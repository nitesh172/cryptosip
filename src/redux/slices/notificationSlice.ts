import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NotificationSettingsProps } from 'types'

// Define a type for the slice state
export interface NotificationState {
  notificationSetting: NotificationSettingsProps | null
}

// Define the initial state using that type
const initialState: NotificationState = {
  notificationSetting: null,
}

export const airdropSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setUserNotificationSetting: (state, action: PayloadAction<NotificationSettingsProps>) => {
      state.notificationSetting = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserNotificationSetting } = airdropSlice.actions

export default airdropSlice.reducer
