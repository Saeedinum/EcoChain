import { configureStore } from "@reduxjs/toolkit"

import { authAPI } from "@/feature/auth/authAPI"
import { learnAPI } from "@/feature/learn/learnAPI"

import authSlice from "@/feature/auth/authSlice"
import learnSlice from "@/feature/learn/learnSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    learn: learnSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [learnAPI.reducerPath]: learnAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, learnAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
