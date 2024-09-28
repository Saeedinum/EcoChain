export type BACKEMD_Question = {
  category: string
  createdAt: string
  ques: string
  result1: string
  result2: string
  result3: string
  result4: string
  updatedAt: string
  __v: number
  _id: string
}

export type Expected_Question = {
  question: string
  answers: string[]
  id: string
  answer?: { index: number; name: string }
}

// The current type 'BACKEND_Question' represents the structure used by the backend.
// I will transform this type to match the 'Expected_Question' structure, which is the desired format.
// In the future, the backend might also adopt this new structure, which is why I'm preparing the code to work with 'Expected_Question'.

// ----------------------
