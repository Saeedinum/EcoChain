import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"

import { LoginForm } from "@/types"
import { loginSchema } from "@/schema"

import Header from "../components/Header"
import InputField from "../components/InputField"

import { useToast } from "@/hooks/use-toast"

import { useAppDispatch } from "@/store/hooks"
import { useLoginMutation } from "../authAPI"
import { login } from "../authSlice"

import image from "@/assets/auth/login.png"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [loginMutation, { isLoading }] = useLoginMutation()

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>(
    {
      resolver:zodResolver(loginSchema)
    }
  )

  const onSubmit: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    await loginMutation(data)
      .unwrap()
      .then((payload) => {
        dispatch(
          login({
            token: payload.token,
            firstName: payload.data.firstName,
            id: payload.data._id,
          }),
        )
        navigate("/")
        toast({
          description: "You have successfully logged in",
        })
      })
      .catch((error) => {
        setError("email", {
          type: "manual",
          message: error.data.message,
        })
        setError("password", {})
      })
  }

  return (
    <>
      <Header type="login" />
      <main className="max-w-screen mt-5 flex items-center justify-center gap-20 lg:h-[70vh]">
        <section className="max-w-[450px] lg:mr-[5rem]">
          <header className="text-center text-3xl font-bold text-[#0B539B] sm:text-4xl">
            <h1>
              Log in <br />
              Follow our world
            </h1>
          </header>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 flex flex-col items-center justify-between gap-7 max-sm:px-10"
          >
            <InputField
              label="  Email"
              id="email"
              placeholder="enter your email"
              className={`${errors.email ? "border-red-500" : ""}`}
              register={register("email", { required: true })}
            />
            <InputField
              label=" Password"
              id="password"
              type="password"
              placeholder="Enter password"
              className={`${errors.password ? "border-red-500" : ""}`}
              register={register("password", { required: true })}
            />
            <Link
              to={"/forgetPassword"}
              className="-my-5 place-self-end font-medium text-[#86A41E]"
            >
              forget Password ?
            </Link>
            <button
              type="submit"
              className="h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white max-sm:mb-5 sm:w-[418px]"
            >
              {isLoading ? (
                <p
                  className="text-surface ml-auto mr-auto h-7 w-7 animate-spin rounded-full border-4 border-solid border-white border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                  role="status"
                ></p>
              ) : (
                "Log in"
              )}
            </button>
          </form>
          {errors.email && (
            <p className="text-center text-red-500">{errors.email.message}</p>
          )}
        </section>
        <img src={image} alt="" className="hidden lg:block" />
      </main>
    </>
  )
}

export default Login
