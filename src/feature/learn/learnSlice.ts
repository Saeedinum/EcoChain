import { BACKEMD_Question, Expected_Question } from "@/types/backend"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

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
          id: q._id
        }
      })
    },
    addAnswer: (state, action: PayloadAction<{ questionID: string; answer: { index: number; name: string } }>) => {
      const question = state.questions.find(q => q.id === action.payload.questionID)
      if (question) {
        question.answer = action.payload.answer
      }
    }
  }
})

export const { getQuestions, addAnswer } = learnSlice.actions
export default learnSlice.reducer
