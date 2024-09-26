import { AuthSlice } from "@/types"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: Partial<AuthSlice> = {}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_, action: PayloadAction<AuthSlice>) => {
      localStorage.setItem("token", action.payload.token)
      return action.payload
    },
    logout: () => {
      localStorage.clear()
      return initialState
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
