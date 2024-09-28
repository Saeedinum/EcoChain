import { useState } from "react"

import { Link, useParams } from "react-router-dom"

import quiezIcon from "@/assets/global/quiz.svg"

const Topic = () => {
  const { id } = useParams()
  const [section, setSection] = useState<"Definition" | "Reasons" | "Effects" | "Solutions">("Definition")

  return (
    <section className="flex flex-col gap-10 pb-20">
      <header className="flex flex-wrap items-end justify-between">
        <h2 className="text-nowrap text-lg font-bold sm:text-2xl md:text-3xl">
          <span className="text-[#0B539B]">Learn about </span>
          <span className="text-[#86A41E]">{id?.split("-").join(" ") || ""}</span>
        </h2>
        <Link
          to={`quiz`}
          className="ml-auto flex items-center justify-center gap-2 text-nowrap rounded-[20px] font-medium text-[#0B539B] max-sm:text-sm md:bg-[#E4FF87] md:px-5 md:py-3 md:text-base md:font-bold"
        >
          <img src={quiezIcon} alt="" className="size-[20px] md:size-[27px]" />
          Go to Quiz
        </Link>
      </header>
      <nav className="ml-auto mr-auto flex w-full max-lg:justify-between lg:mt-5 lg:justify-center lg:gap-[60px]">
        {["Definition", "Reasons", "Effects", "Solutions"].map((item) => (
          <button
            key={item}
            onClick={() => setSection(item as "Definition" | "Reasons" | "Effects" | "Solutions")}
            className={`text-nowrap rounded-[20px] border-[#0B539B] font-medium duration-300 sm:text-xl md:text-2xl lg:h-[65px] lg:w-[212px] lg:border-[1px] ${section === item ? "text-[#0B539B] lg:bg-[#0B539B] lg:text-white" : ""}`}
          >
            {`${item}`}
          </button>
        ))}
      </nav>
    </section>
  )
}

export default Topic
