export interface AuthSlice {
  firstName: string
  token: string | null
  email: string
  id: string
}

export type SignupForm = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export type LoginForm = {
  email: string
  password: string
}

export type Topics_JSON_Data = {
  title: string
  id: string
  logo: string
  video: string
  sections: string[]
}
