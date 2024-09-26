
import { useForm, SubmitHandler } from "react-hook-form"
import Header from "../components/Header"
import image from "@/assets/auth/singup.png"
import { SignupForm } from "@/types"
import InputField from "../components/InputField"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<SignupForm>()

  const onSubmit: SubmitHandler<SignupForm> = (data: SignupForm) =>
    console.log(data)

  return (
    <>
      <Header type="signup" />
      <main className="max-w-screen mt-5 flex items-center justify-center gap-20">
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
            className="mt-5 flex flex-col items-center justify-between gap-5 max-sm:px-10"
          >
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <InputField
                label="First Name"
                id="firstName"
                placeholder="First name"
                register={register("firstName", { required: true })}
              />
              <InputField
                label="Last name"
                id="lastName"
                placeholder="Last name"
                register={register("lastName", { required: true })}
              />
            </div>
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
            <InputField
              label="Confirm password"
              id="confirmPassword"
              placeholder="Confirm password"
              register={register("confirmPassword", { required: true })}
            />

            <button
              type="submit"
              className="h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white max-sm:mb-5 sm:w-[418px]"
            >
              Sign up
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default SignUp
