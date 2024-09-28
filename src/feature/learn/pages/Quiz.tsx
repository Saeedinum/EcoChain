import { useGetQuestionsQuery } from "../learnAPI"
import { Link, useParams } from "react-router-dom"

import topics from "../data/topics.json"

import arrow from "@/assets/global/rightArrow.svg"

const Quiz = () => {
  const { id } = useParams()
  useGetQuestionsQuery({ topic: id })

  return (
    <>
      <header className="flex items-center justify-start gap-10 px-20 pt-7">
        <img src={topics.topics[0].logo} alt="" />
        <h1 className="text-3xl font-extrabold text-[#0B539B]">
          {" "}
          Greenhouse Gases Quiz
        </h1>
        <Link
          to={"/."}
          className="border-nonde outline-nonde ml-auto h-[54px] w-[238px] content-center rounded-[20px] bg-[#528FCC] text-center text-[20px] font-bold text-white"
        >
          Back to Learn
        </Link>
      </header>
      <main className="mt-10 flex w-full items-center justify-center gap-20">
        <button className="size-[49px] rounded-full bg-[#528FCC] duration-100 hover:bg-[#3673b1]">
          <img src={arrow} alt="" className="ml-[10px] size-8 rotate-180" />
        </button>
        <section className="relative h-[400px] w-[700px] select-none rounded-[40px] border-[1rem] border-[#528FCC] bg-white px-5 pt-5">
          <div className="absolute -left-[1.5rem] -top-[1rem] -z-10 h-[calc(100%+2rem)] w-[calc(100%+3rem)] rotate-[-5deg] rounded-[40px] border-[2rem] border-solid border-[#E4FF87]"></div>
          <h2 className="rounded-[20px] bg-[#E4F6FF] px-4 py-2 text-[20px] font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            sequi?
          </h2>
          <div className="ml-7 mt-7 flex flex-col justify-between gap-10 font-medium *:cursor-pointer">
            <p className="">A. Lorem, ipsum dolor.</p>
            <p className="">B. Lorem, ipsum dolor.</p>
            <p className="">C. Lorem, ipsum dolor.</p>
            <p className="">D. Lorem, ipsum dolor.</p>
          </div>
        </section>
        <button className="size-[49px] rounded-full bg-[#528FCC] duration-100 hover:bg-[#3673b1]">
          <img src={arrow} alt="" className="ml-[8px] size-8" />
        </button>
      </main>
    </>
  )
}

export default Quiz
