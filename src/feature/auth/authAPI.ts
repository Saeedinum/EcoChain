import { RootState } from "@/store/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API + "auth/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", token)
    }
    return headers
  },
})

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "signup",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmailUser: builder.mutation({
      query: (data) => ({
        url: "verifyEmailUser",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          Email: email,
          password,
        },
      }),
    }),

    forgetpass: builder.mutation({
      query: ({ email }) => ({
        url: "forgetpass",
        method: "POST",
        body: {
          Email: email,
        },
      }),
    }),

    verifycode: builder.mutation({
      query: ({ resetCode }) => ({
        url: "verifycode",
        method: "POST",
        body: { resetCode },
      }),
    }),

    resetpassword: builder.mutation({
      query: ({ password, confirm }) => ({
        url: "resetpassword",
        method: "PUT",
        body: {
          newPassword: password,
          passwordConfirm: confirm,
        },
      }),
    }),
  }),
})

export const {
  useSignupMutation,
  useVerifyEmailUserMutation,
  useLoginMutation,
  useForgetpassMutation,
  useVerifycodeMutation,
  useResetpasswordMutation,
} = authAPI
