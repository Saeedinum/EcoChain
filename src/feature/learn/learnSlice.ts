import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { BACKEMD_Question, Expected_Question } from "@/types/backend"

const initialState = {
  questions: [] as Expected_Question[]
}

export const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    getQuestions: (state, action: PayloadAction<BACKEMD_Question[]>) => {
      state.questions = action.payload.map(q => {
        return {
          question: q.ques,
          answers: [q.result1, q.result2, q.result3, q.result4],
          id: q._id,
        }
      })
    },
    addAnswer: (state, action: PayloadAction<{ questionID: string; answer: { index: number; name: string } }>) => {
      const question = state.questions.find(q => q.id === action.payload.questionID)
      if (question) {
        question.answer = action.payload.answer
      }
    },
    getResult: (state, action: PayloadAction<{ _id: string; explain: string; result: string }[]>) => {
      state.questions = state.questions.map(question => {
        const result = action.payload.find(r => r._id === question.id)
        if (result) {
          question.explain = result.explain
          question.result = question.answer?.name === result.result ? true : result.result
        }
        return question
      })
      console.log(state.questions)
    }
  }
})

export const { getQuestions, addAnswer, getResult } = learnSlice.actions
export default learnSlice.reducer
