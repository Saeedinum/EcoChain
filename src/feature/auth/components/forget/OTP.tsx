import { useState } from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { otpRegex } from "@/schema"
import { useVerifycodeMutation } from "../../authAPI"

const OTP = ({
  handleSection,
}: {
  handleSection: (section: number) => void
}) => {
  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<string>("")

  const [verifycode, { isLoading }] = useVerifycodeMutation()

  const onSubmit = async (code: string) => {
    setError("")
    await verifycode({ code })
      .unwrap()
      .then((payload) => {
        console.log(payload)
        handleSection(3)
      })
      .catch((error) => {
        setError(error.data.message)
      })
  }

  return (
    <>
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
        className="mt-10 h-[54px] w-full rounded-[20px] bg-[#528FCC] text-[20px] font-bold text-white max-sm:mb-5 sm:w-[418px]"
      >
        {isLoading ? (
          <p
            className="text-surface ml-auto mr-auto h-7 w-7 animate-spin rounded-full border-4 border-solid border-white border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          ></p>
        ) : (
          "Veify"
        )}
      </button>
      {error && <p className="text-center text-red-500">{error}</p>}
    </>
  )
}

export default OTP
