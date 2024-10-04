import delgaciation from "@/assets/discover/Delgaciation.png"
import drought from "@/assets/discover/Drought.png"
import eruption from "@/assets/discover/Eruption.png"
import landSlide from "@/assets/discover/Land slide.png"
import tornado from "@/assets/discover/Torando.png"
import tsunami from "@/assets/discover/Tsunami.png"
import wildFires from "@/assets/discover/Wild Fires.png"
import earthCo2 from "@/assets/discover/earthCo2.png"
import { Link } from "react-router-dom"

const DiscoverHomeSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[48px]">Discover</h2>
        <p className="flex flex-col items-center text-[13px] font-bold text-[#BABABA] lg:text-[15px]">
          <span> Climate change is causing many changes in the environment,</span>
          <span> nature, and the natural behavior of our planet.</span>
        </p>
      </div>
      <Link to={"/discover/deglaciation"} className="relative flex h-[80vh] w-full items-center justify-center bg-transparent sm:h-[100vh] lg:my-20 lg:h-[170vh]">
        <div className="absolute left-[50%] top-20 z-50 flex size-[70px] translate-x-[-50%] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:top-0 lg:size-[244px]">
          <img src={delgaciation} alt="Delgaciation" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Delgaciation</span>
        </div>

        <Link
          to={"/discover/torando"}
          className="absolute left-[3rem] top-[12rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:left-[10rem] lg:size-[244px]"
        >
          <img src={tornado} alt="Tornado" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Torando</span>
        </Link>

        <Link
          to={"/discover/eruption"}
          className="absolute left-[3rem] top-[21rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:top-[24rem] sm:size-[140px] lg:left-[10rem] lg:top-[34rem] lg:size-[244px]"
        >
          <img src={eruption} alt="eruption" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Eruption</span>
        </Link>

        <Link
          to={"/discover/drought"}
          className="absolute left-[6rem] top-[30rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:left-[10rem] sm:top-[38rem] sm:size-[140px] lg:left-[20rem] lg:top-[54rem] lg:size-[244px]"
        >
          <img src={drought} alt="drought" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Drought</span>
        </Link>

        <Link
          to={"/discover/wild-fires"}
          className="absolute right-[3rem] top-[12rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:right-[10rem] lg:size-[244px]"
        >
          <img src={wildFires} alt="Tornado" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Wild Fires</span>
        </Link>

        <Link
          to={"/discover/landslide"}
          className="absolute right-[3rem] top-[21rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:top-[24rem] sm:size-[140px] lg:right-[10rem] lg:top-[34rem] lg:size-[244px]"
        >
          <img src={landSlide} alt="Tornado" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Land slide</span>
        </Link>

        <Link
          to={"/discover/tsunami"}
          className="absolute right-[6rem] top-[30rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:right-[10rem] sm:top-[38rem] sm:size-[140px] lg:right-[20rem] lg:top-[54rem] lg:size-[244px]"
        >
          <img src={tsunami} alt="Tornado" className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
          <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">Tsunami</span>
        </Link>
        <img src={earthCo2} alt="Earth CO2" className="w-[114px] sm:mt-52 sm:w-[150px] lg:w-[300px]" />
      </Link>
    </section>
  )
}

export default DiscoverHomeSection
