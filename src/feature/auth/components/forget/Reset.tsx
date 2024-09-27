import { useNavigate } from "react-router-dom"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordSchema } from "@/schema"

import { useToast } from "@/hooks/use-toast"
import useGoodPass from "@/hooks/useGoodPass"
import { useResetpasswordMutation } from "../../authAPI"

import InputField from "../InputField"

type Reset = {
  password: string
  confirm: string
}

const Reset = () => {
  const navigate = useNavigate()

  const { ProgressBar, checkPassword } = useGoodPass()
  const [resetpassword, { isLoading }] = useResetpasswordMutation()

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Reset>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit: SubmitHandler<Reset> = async (data: Reset) => {
    await resetpassword(data)
      .unwrap()
      .then(() => {
        navigate("/")
        toast({
          description: "You have successfully reset your password",
        })
      })
      .catch((error) => {
        setError("password", {
          type: "manual",
          message: error.data.message,
        })
      })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-[450px] flex-col gap-10 px-10"
      >
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
          className={`${errors.confirm ? "border-red-500" : ""}`}
          register={register("confirm", { required: true })}
        />
        <button
          type="submit"
          className="h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white"
        >
          {isLoading ? (
            <p
              className="text-surface ml-auto mr-auto h-7 w-7 animate-spin rounded-full border-4 border-solid border-white border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></p>
          ) : (
            "Reset"
          )}
        </button>
      </form>
      {errors.confirm && (
        <p className="mt-2 text-center text-red-500">
          {errors.confirm.message}
        </p>
      )}
    </>
  )
}

export default Reset
