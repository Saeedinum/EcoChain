import { RootState } from "@/store/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API + "question/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", token)
    }
    return headers
  },
})

export const learnAPI = createApi({
  reducerPath: "learnAPI",
  baseQuery,
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: ({ topic }) => ({
        url: topic,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetQuestionsQuery } = learnAPI
