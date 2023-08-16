import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AirdropProps } from "types"

// Define a type for the slice state
export interface AirdropState {
  airdrops: AirdropProps[]
}

// Define the initial state using that type
const initialState: AirdropState = {
  airdrops: [],
}

export const airdropSlice = createSlice({
  name: "airdrops",
  initialState,
  reducers: {
    setAirdrops: (state, action: PayloadAction<AirdropProps[]>) => {
      state.airdrops = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAirdrops } = airdropSlice.actions

export default airdropSlice.reducer
