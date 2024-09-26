import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "@/store/hooks"
import { useVerifyEmailUserMutation } from "../authAPI"
import { login } from "../authSlice"

import { otpRegex } from "@/schema"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const Verify = ({
  open,
  handleVerifyDialog,
  email,
}: {
  open: boolean
  handleVerifyDialog: (e: boolean) => void
  email: string
}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [verifyEmailUser, { isLoading }] = useVerifyEmailUserMutation()

  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<string>("")

  const onSubmit = async (code: string) => {
    setError("")
    await verifyEmailUser({ code })
      .unwrap()
      .then((payload) => {
        sessionStorage.clear()
        console.log(payload)
        dispatch(
          login({
            token: payload.token,
            firstName: payload.data.firstName,
            id: payload.data._id,
          }),
        )
        navigate("/")
      })
      .catch((error) => {
        setError(error.data.message)
      })
  }

  return (
    <Dialog open={open} onOpenChange={handleVerifyDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-[20px]">
            Check your email
          </DialogTitle>
          <DialogDescription className="text-center text-[15px]">
            Enter the code that was sent to {email}
          </DialogDescription>
        </DialogHeader>
        <InputOTP
          className="bg-red-200"
          maxLength={6}
          pattern={otpRegex.source}
          onChange={(value) => {
            setValue(value)
            setError("")
          }}
        >
          <InputOTPGroup className="mx-auto *:text-[25px] *:text-blue-800">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <button
          onClick={() => onSubmit(value)}
          type="submit"
          className="text-[20px] font-bold text-[#528FCC] duration-100 hover:text-blue-700"
        >
          {isLoading ? (
            <p
              className="text-surface ml-auto mr-auto h-7 w-7 animate-spin rounded-full border-4 border-solid border-blue-500 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></p>
          ) : (
            "Verify"
          )}
        </button>
        {error && <p className="text-center text-red-500">{error}</p>}
      </DialogContent>
    </Dialog>
  )
}

export default Verify
