import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { RootState } from "@/store/store"

import { getQuestions, getResult } from "./learnSlice"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", token)
    }
    return headers
  }
})

export const learnAPI = createApi({
  reducerPath: "learnAPI",
  baseQuery,
  endpoints: builder => ({
    getQuestions: builder.query({
      query: ({ topic }) => ({
        url: `question/${topic}`,
        method: "GET"
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const data = (await queryFulfilled).data.data
        dispatch(getQuestions(data))
      }
    }),

    submitQuiz: builder.mutation({
      query: data => ({
        url: "User",
        method: "POST",
        body: data
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const data = (await queryFulfilled).data.data
        dispatch(getResult(data))
      }
    })
  })
})

export const { useGetQuestionsQuery, useSubmitQuizMutation } = learnAPI
