import DiscoverHomeSection from "../discover/components/DiscoverHomeSection"
import HeroSection from "./components/HeroSection"
import { Link } from "react-router-dom"

import learn from "@/assets/home/learn.png"
import play from "@/assets/home/play.png"

import "./index.css"

const Home = () => {
  return (
    <main className="select-none overflow-hidden">
      <HeroSection />
      <DiscoverHomeSection />
      <section className="relative flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-40 lg:mt-20">
        <img src={learn} alt="" className="w-[191px] md:w-[250px] lg:w-fit" />
        <div className="flex flex-col items-center gap-8">
          <h2 className="flex flex-col items-center gap-2 text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[45px]">Learn with quiz</h2>
          <p className="w-[305px] text-center text-[12px] font-medium text-[#B5B5B5] lg:w-[500px] lg:text-[20px]">
            Learning about climate change is essential to understanding its impact on our planet. It involves studying how human activities like burning fossil fuels and deforestation are altering
            global temperatures and weather patterns. These changes lead to severe weather events, rising sea levels, and threats to ecosystems. Gaining knowledge about climate change helps you
            recognize the urgency of the issue and empowers you to take part in solutions that promote a sustainable future.
          </p>
          <Link to={"/play"} className="relative overflow-hidden rounded-[20px] bg-[#528FCC] px-10 py-3 text-center font-bold text-white transition-transform lg:w-[238px] lg:text-[20px]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#528FCC] to-[#E4FF87] opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
            <span className="relative z-10">Learn more</span>
          </Link>
        </div>
      </section>
      <section className="mt-20 flex flex-col items-center gap-10 md:flex-row md:justify-center lg:gap-40">
        <div className="flex flex-col items-center gap-8">
          <h2 className="flex flex-col items-center gap-2 text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[45px]">Play and Fun</h2>
          <p className="w-[305px] text-center text-[12px] font-medium text-[#B5B5B5] lg:w-[500px] lg:text-[20px]">
            In the "Play and Fun" section, we offer interactive games and quizzes that make learning about climate change engaging and enjoyable. These activities help users grasp complex concepts
            while having a great time, blending education with entertainment to inspire action and creativity.
          </p>
          <Link to={"/play"} className="relative overflow-hidden rounded-[20px] bg-[#528FCC] px-10 py-3 text-center font-bold text-white transition-transform lg:w-[238px] lg:text-[20px]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#528FCC] to-[#E4FF87] opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
            <span className="relative z-10">Play now</span>
          </Link>
        </div>
        <img src={play} alt="" className="w-[300px] lg:w-fit" />
      </section>
    </main>
  )
}

export default Home
