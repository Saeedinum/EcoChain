import { useState, useEffect } from "react"

import image1before from "@/assets/senarios/image1before.png"
import image1after from "@/assets/senarios/image1after.png"

import image2before from "@/assets/senarios/image2before.png"
import image2after from "@/assets/senarios/image2after.png"

import image3before from "@/assets/senarios/image3before.png"
import image3after from "@/assets/senarios/image3after.png"

import { Progress } from "@/components/ui/progress"

const Scenarios = () => {
  const [effect, setEffect] = useState(false)
  const [score, setScore] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  const [imageSources, setImageSources] = useState([image1before, image2before, image3before])

  useEffect(() => {
    if (score === 100) {
      setImageSources([image1after, image2after, image3after])
    } else if (score === 0) {
      setImageSources([image1before, image2before, image3before])
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
    if (score < 100 && !effect) {
      setEffect(true)

      const interval = setInterval(() => {
        setScore(prevScore => {
          if (prevScore < 100) {
            return prevScore + 1
          } else {
            clearInterval(interval)
            setEffect(false)
            return prevScore
          }
        })
      }, 10)
    }
  }

  const handleDecrement = () => {
    if (score > 0 && !effect) {
      setEffect(true)

      const interval = setInterval(() => {
        setScore(prevScore => {
          if (prevScore > 0) {
            return prevScore - 1
          } else {
            clearInterval(interval)
            setEffect(false)
            return prevScore
          }
        })
      }, 10)
    }
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
      <section className="flex items-center">
        <button onClick={handleDecrement} disabled={effect} className="mx-10 place-self-end rounded-[10px] bg-blue-600 px-3 py-2 font-bold text-white">
          Reverse Effect
        </button>
        <Progress value={score} className={`${getProgressColor(score)} mx-auto max-w-[700px]`} />
        <button onClick={handleIncrement} disabled={effect} className="mx-10 place-self-end rounded-[10px] bg-red-600 px-3 py-2 font-bold text-white">
          Add Effect
        </button>
      </section>
      <section className="my-20 flex justify-center gap-10 *:w-[300px]">
        <img src={imageSources[0]} alt="Image 1" />
        <img src={imageSources[1]} alt="Image 2" />
        <img src={imageSources[2]} alt="Image 3" />
      </section>
    </main>
  )
}

export default Scenarios
