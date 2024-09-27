import { SubmitHandler, useForm } from "react-hook-form"

import { useForgetpassMutation } from "../../authAPI"

import InputField from "../InputField"
import { useAppDispatch } from "@/store/hooks"
import { setToken } from "../../authSlice"

type emailField = {
  email: string
}

const Email = ({
  handleSection,
}: {
  handleSection: (section: number) => void
}) => {
  const dispatch = useAppDispatch()
  const [forgetpass, { isLoading }] = useForgetpassMutation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<emailField>()

  const onSubmit: SubmitHandler<emailField> = async (data: emailField) => {
    await forgetpass(data)
      .unwrap()
      .then((payload) => {
        dispatch(setToken(payload.token!))
        handleSection(2)
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-between gap-7 max-sm:px-10"
      >
        <InputField
          label="  Email"
          id="email"
          placeholder="enter your email"
          className={`${errors.email ? "border-red-500" : ""}`}
          register={register("email", { required: true })}
        />
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
            "send code"
          )}
        </button>
      </form>
      {errors.email && (
        <p className="text-center text-red-500">{errors.email.message}</p>
      )}
    </>
  )
}

export default Email
