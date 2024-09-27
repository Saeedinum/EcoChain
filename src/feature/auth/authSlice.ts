import { AuthSlice } from "@/types"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState: Partial<AuthSlice> = {
  firstName: localStorage.getItem("name") || "",
  token: localStorage.getItem("token") || "",
  id: localStorage.getItem("id") || "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthSlice>) => {
      state = action.payload
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("name", action.payload.firstName)
      if (state.id) {
        // that is because : src/feature/auth/authSlice.ts:15:13 - error TS6133: 'state' is declared but its value is never read.
        localStorage.setItem("id", state.id)
      }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      localStorage.setItem("token", action.payload)
    },
    logout: () => {
      localStorage.clear()
      return initialState
    },
  },
})

export const { login, logout, setToken } = authSlice.actions
export default authSlice.reducer
