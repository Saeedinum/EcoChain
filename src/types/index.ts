export interface AuthSlice {
  firstName: string
  token: string
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
