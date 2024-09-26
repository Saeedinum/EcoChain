import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface AuthSlice {
  fullName: string
  token: string
  id: string
}

const initialState: Partial<AuthSlice> = {}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthSlice>) => {
      state = action.payload
      localStorage.setItem("token", action.payload.token)
    },
    logout: () => {
      localStorage.clear()
      return initialState
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
