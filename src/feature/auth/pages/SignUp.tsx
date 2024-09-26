import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import useGoodPass from "@/hooks/useGoodPass"

import { SignupForm } from "@/types"
import { signupSchema } from "@/schema"

import { useAppDispatch } from "@/store/hooks"
import { useSignupMutation } from "../authAPI"
import { setToken } from "../authSlice"

import Header from "../components/Header"
import InputField from "../components/InputField"
import Verify from "../components/Verify"

import image from "@/assets/auth/singup.png"

const SignUp = () => {
  const dispatch = useAppDispatch()
  const { ProgressBar, checkPassword } = useGoodPass()
  const [signup, { isLoading }] = useSignupMutation()

  const [verify, setVerify] = useState<boolean>(false)
  const handleVerifyDialog = (e: boolean) => {
    setVerify(e)
  }

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      password: "qwe123Q!",
      confirmPassword: "qwe123Q!",
    },
  })

  const onSubmit: SubmitHandler<SignupForm> = async (data: SignupForm) => {
    await signup(data)
      .unwrap()
      .then((payload) => {
        handleVerifyDialog(true)
        dispatch(setToken(payload.token!))
      })
      .catch((error) => {
        setError("email", {
          type: "manual",
          message: error.data.message,
        })
      })
  }

  return (
    <>
      <Header type="signup" />
      <main className="max-w-screen mt-5 flex items-center justify-center gap-20">
        <Verify
          open={verify}
          handleVerifyDialog={handleVerifyDialog}
          email={getValues().email}
        />
        <img src={image} alt="" className="hidden lg:block" />
        <section className="max-w-[450px] lg:mr-[5rem]">
          <header className="text-center text-3xl font-bold text-[#0B539B] sm:text-4xl">
            <h1>
              Sign Up <br />
              To Change your earth
            </h1>
          </header>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 flex flex-col items-center justify-between gap-4 max-sm:px-10"
          >
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <InputField
                label="First Name"
                id="firstName"
                placeholder="First name"
                className={`${errors.firstName ? "border-red-500" : ""}`}
                register={register("firstName", { required: true })}
              />
              <InputField
                label="Last name"
                id="lastName"
                placeholder="Last name"
                className={`${errors.lastName ? "border-red-500" : ""}`}
                register={register("lastName", { required: true })}
              />
            </div>
            <InputField
              label="Email"
              id="email"
              placeholder="enter your email"
              className={`${errors.email ? "border-red-500" : ""}`}
              register={register("email", { required: true })}
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              placeholder="Enter password"
              className={`${errors.password ? "border-red-500" : ""}`}
              register={register("password", {
                required: "required",
                onChange(event) {
                  checkPassword(event.target.value)
                },
              })}
              ProgressBar={ProgressBar}
            />
            <InputField
              label="Confirm password"
              id="confirmPassword"
              placeholder="Confirm password"
              type="password"
              className={`${errors.confirmPassword ? "border-red-500" : ""}`}
              register={register("confirmPassword", { required: true })}
            />

            <button
              type="submit"
              className="h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white sm:w-[418px]"
            >
              {isLoading ? (
                <p
                  className="text-surface ml-auto mr-auto h-7 w-7 animate-spin rounded-full border-4 border-solid border-white border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                  role="status"
                ></p>
              ) : (
                "  Sign up"
              )}
            </button>
          </form>
          {errors.email && (
            <p className="text-center text-red-500">{errors.email.message}</p>
          )}
        </section>
      </main>
    </>
  )
}

export default SignUp
