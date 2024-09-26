import { z } from "zod"

const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/
const email = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com)$/i
const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export const otpRegex = /^\d+$/

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name is required" })
      .regex(nameRegex, { message: "First Name must only contain letters" }),
    lastName: z
      .string()
      .min(1, { message: "Last Name is required" })
      .regex(nameRegex, { message: "Last Name must only contain letters" }),
    email: z
      .string()
      .regex(email, { message: "Please enter a valid Gmail address" }),
    password: z.string().regex(password, {
      message:
        "Password must be at least 8 characters long, with one uppercase, one lowercase, one number, and one special character",
    }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      })
    }
  })
