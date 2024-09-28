import { useState } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useGetQuestionsQuery } from "../learnAPI"
import { addAnswer } from "../learnSlice"

import QuizHeader from "../components/QuizHeader"

import topics from "../data/topics.json"

import arrow from "@/assets/global/rightArrow.svg"

import "../index.css"

const Quiz = () => {
  const dispatch = useAppDispatch()

  const { id } = useParams()
  const { logo, title } = topics.topics.find(e => e.id === id) || { logo: "", title: "" }

  const { isLoading, isError } = useGetQuestionsQuery({ topic: id })
  const questions = useAppSelector(state => state.learn.questions)

  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [startQuiz, setStartQuiz] = useState(false)

  if (!startQuiz)
    return (
      <>
        <QuizHeader title={title} image={logo} />
        <main className="flex w-full flex-col items-center justify-center pt-32">
          <button disabled={isLoading || isError} onClick={() => setStartQuiz(true)} className="text-3xl font-bold text-[#3673b1]">
            {isLoading ? "Loading..." : isError ? "Error" : "Start Quiz"}
          </button>
          <p>{questions.length ? `${questions.length} quesions. without a timer` : ""}</p>
        </main>
      </>
    )

  return (
    <>
      <QuizHeader title={title} image={logo} />
      <main className="mt-10 flex w-full items-center justify-center gap-20">
        <button
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
          className="size-[49px] rounded-full bg-[#528FCC] duration-100 hover:bg-[#3673b1] disabled:bg-gray-400"
        >
          <img src={arrow} alt="" className="ml-[10px] size-8 rotate-180" />
        </button>

        <section className="relative h-[400px] w-[700px] select-none rounded-[40px] border-[1rem] border-[#528FCC] bg-white px-5 pt-5">
          <h2 className="rounded-[20px] bg-[#E4F6FF] px-4 py-2 text-[20px] font-medium text-black">{questions[currentQuestion].question}</h2>
          <div className="ml-7 mt-7 flex flex-col justify-between gap-10 font-medium *:cursor-pointer">
            {questions[currentQuestion].answers.map((answer, i) => (
              <div key={i} className="flex items-center gap-3 *:cursor-pointer">
                <input
                  checked={questions[currentQuestion].answer?.index === i}
                  onChange={() => dispatch(addAnswer({ questionID: questions[currentQuestion].id, answer: { index: i, name: answer } }))}
                  type="radio"
                  name="answer"
                  id={answer}
                />
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}
          </div>

          <div className="absolute -left-[1.5rem] -top-[1rem] -z-10 h-[calc(100%+2rem)] w-[calc(100%+3rem)] rotate-[-5deg] rounded-[40px] border-[2rem] border-solid border-[#E4FF87]"></div>
        </section>

        <button
          onClick={() => setCurrentQuestion(prev => prev + 1)}
          disabled={currentQuestion === questions?.length - 1}
          className={`mx-3 size-[49px] rounded-full bg-[#528FCC] duration-100 hover:bg-[#3673b1] disabled:bg-gray-400 ${currentQuestion === questions?.length - 1 && "hidden"} `}
        >
          <img src={arrow} alt="" className="ml-[8px] size-8" />
        </button>

        <button
          disabled={questions.some(q => !q.answer)}
          className={`group relative rounded-lg bg-[#528FCC] px-2 py-1 font-bold text-white duration-100 hover:bg-[#3673b1] disabled:bg-gray-400 ${currentQuestion !== questions?.length - 1 && "hidden"}`}
        >
          Submit
          <p className="absolute -bottom-10 left-[50%] translate-x-[-50%] text-nowrap text-red-500 opacity-0 group-disabled:opacity-100">Answer all questions first</p>
        </button>
      </main>
    </>
  )
}

export default Quiz
