import { UseFormRegister, FieldValues } from "react-hook-form"

type InputFieldProps<T extends FieldValues> = {
  id: string
  label: string
  type?: string
  className?: string
  placeholder: string
  ProgressBar?:JSX.Element
  register: ReturnType<UseFormRegister<T>>
}

const InputField = <T extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  register,
  className,
  ProgressBar,
}: InputFieldProps<T>) => {
  return (
    <label htmlFor={id} className="relative w-full">
      <span className="ml-1 text-[15px] font-semibold text-black">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`h-[52px] w-full rounded-[8px] border bg-[#f7f5f5] pl-[16px] text-[20px] font-medium outline-none placeholder:text-[15px] placeholder:text-[#808080] ${className} `}
      />
      {ProgressBar}
    </label>
  )
}

export default InputField
