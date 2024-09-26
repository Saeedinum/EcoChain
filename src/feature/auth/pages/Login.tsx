import { useForm, SubmitHandler } from "react-hook-form"
import { LoginForm } from "@/types"
import Header from "../components/Header"
import image from "@/assets/auth/login.png"
import InputField from "../components/InputField"

const Login = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) =>
    console.log(data)

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
              register={register("email", { required: true })}
            />
            <InputField
              label=" Password"
              id="password"
              placeholder="Enter password"
              register={register("password", { required: true })}
            />
            <div></div>
            <button
              type="submit"
              className="h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white max-sm:mb-5 sm:w-[418px]"
            >
              Log in
            </button>
          </form>
        </section>
        <img src={image} alt="" className="hidden lg:block" />
      </main>
    </>
  )
}

export default Login
