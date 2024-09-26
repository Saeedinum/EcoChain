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
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("name", action.payload.firstName)
      localStorage.setItem("id", action.payload.id)
      state = action.payload
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
