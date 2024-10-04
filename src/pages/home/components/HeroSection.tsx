import leftBackground from "@/assets/home/leftbackground.png"
import rightBackground from "@/assets/home/rightbackground.png"
import animation1Image from "@/assets/home/animation1.png"
import animation2Image from "@/assets/home/animation2.png"
import animation3Image from "@/assets/home/animation3.png"
import animation4Image from "@/assets/home/animation4.png"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const images = [animation1Image, animation2Image, animation3Image, animation4Image]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-20 max-lg:gap-40 lg:flex-row lg:justify-between lg:px-[5rem] lg:pb-[15rem]">
      <div className="flex flex-col items-center gap-10">
        <h2 className="flex flex-col items-center gap-2 text-nowrap text-center text-[20px] font-extrabold text-[#0B539B] lg:text-[45px]">
          <span>WHAT</span>
          <span> CLIMATE CHANGE</span>
          <span>DO ?!</span>
        </h2>
        <button className="h-[54px] w-[174px] rounded-[20px] bg-[#528FCC] bg-gradient-to-r font-bold text-white hover:from-[#528FCC] hover:to-[#E4FF87] lg:w-[238px] lg:text-[20px]">Know more</button>
      </div>

      <img src={animation1Image} alt="" className="place-self-center max-lg:w-[325px] lg:hidden" />

      <div className="relative hidden h-[500px] w-[520px] lg:block">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute w-full transform transition-all duration-1000 ${index === currentImageIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            style={{ transitionTimingFunction: "ease-in-out" }}
          />
        ))}
      </div>

      <img src={leftBackground} alt="" className="absolute left-0 top-0 -z-10 max-lg:w-[452px]" />
      <img src={rightBackground} alt="" className="absolute right-0 -z-10 max-lg:top-[400px] max-lg:w-[384px] lg:top-0" />
    </section>
  )
}

export default HeroSection
