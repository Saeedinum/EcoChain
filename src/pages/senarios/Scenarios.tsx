import { useState, useEffect } from "react"

import wildfireOne from "@/assets/senarios/wildfire/1.png"
import wildfireTwo from "@/assets/senarios/wildfire/2.png"
import wildfireThree from "@/assets/senarios/wildfire/3.png"
import wildfireFour from "@/assets/senarios/wildfire/4.png"
import wildfireFive from "@/assets/senarios/wildfire/5.png"

import iceMeltOne from "@/assets/senarios/iceMelt/1.png"
import iceMeltTwo from "@/assets/senarios/iceMelt/2.png"
import iceMeltThree from "@/assets/senarios/iceMelt/3.png"
import iceMeltFour from "@/assets/senarios/iceMelt/4.png"
import iceMeltFive from "@/assets/senarios/iceMelt/5.png"

import image2before from "@/assets/senarios/image2before.png"
import image2after from "@/assets/senarios/image2after.png"

import { Progress } from "@/components/ui/progress"

const Scenarios = () => {
  const [score, setScore] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const [imageSources, setImageSources] = useState([wildfireOne, image2before, iceMeltOne])

  useEffect(() => {
    if (score === 100) {
      setImageSources([wildfireFive, image2after, iceMeltFive])
    } else if (score >= 80) {
      setImageSources([wildfireFour, image2before, iceMeltFour])
    } else if (score >= 60) {
      setImageSources([wildfireThree, image2before, iceMeltThree])
    } else if (score >= 40) {
      setImageSources([wildfireTwo, image2before, iceMeltTwo])
    } else {
      setImageSources([wildfireOne, image2before, iceMeltOne])
    }
  }, [score])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleIncrement = () => {
    setScore(prevScore => Math.min(prevScore + 10, 100))
  }

  const handleDecrement = () => {
    setScore(prevScore => Math.max(prevScore - 10, 0))
  }

  const getProgressColor = (score: number) => {
    if (score < 50) {
      return "*:bg-green-500"
    } else if (score < 80) {
      return "*:bg-yellow-500"
    } else {
      return "*:bg-red-500"
    }
  }

  if (!isDesktop) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-bold text-red-500">Sorry, this feature is currently for desktop only.</p>
      </div>
    )
  }

  return (
    <main className="flex flex-col">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-700">How climate changes affect our planet</h1>
      <section className="flex items-center">
        <button onClick={handleDecrement} className="mx-10 place-self-end rounded-[10px] bg-blue-600 px-3 py-2 font-bold text-white">
          Reverse Effect
        </button>
        <Progress value={score} className={`${getProgressColor(score)} mx-auto max-w-[700px]`} />
        <button onClick={handleIncrement} className="mx-10 place-self-end rounded-[10px] bg-red-600 px-3 py-2 font-bold text-white">
          Add Effect
        </button>
      </section>
      <section className="my-20 flex justify-center gap-10 *:w-[300px]">
        <img src={imageSources[0]} alt="Wildfire progression" />
        <img src={imageSources[1]} alt="Image 2" />
        <img src={imageSources[2]} alt="Ice Melt progression" />
      </section>
    </main>
  )
}

export default Scenarios
