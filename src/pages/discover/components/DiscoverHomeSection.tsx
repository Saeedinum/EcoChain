import { Link } from "react-router-dom"

import delgaciation from "@/assets/discover/Delgaciation.png"
import drought from "@/assets/discover/Drought.png"
import eruption from "@/assets/discover/Eruption.png"
import landSlide from "@/assets/discover/Land slide.png"
import tornado from "@/assets/discover/Torando.png"
import tsunami from "@/assets/discover/Tsunami.png"
import wildFires from "@/assets/discover/Wild Fires.png"

const items = [
  { link: "/discover/deglaciation", imgSrc: delgaciation, alt: "Delgaciation", label: "Delgaciation" },
  { link: "/discover/tornado", imgSrc: tornado, alt: "Tornado", label: "Tornado" },
  { link: "/discover/eruption", imgSrc: eruption, alt: "Eruption", label: "Eruption" },
  { link: "/discover/drought", imgSrc: drought, alt: "Drought", label: "Drought" },
  { link: "/discover/wild-fires", imgSrc: wildFires, alt: "Wild Fires", label: "Wild Fires" },
  { link: "/discover/landslide", imgSrc: landSlide, alt: "Landslide", label: "Land Slide" },
  { link: "/discover/tsunami", imgSrc: tsunami, alt: "Tsunami", label: "Tsunami" }
]

const DiscoverHomeSection = () => {
  return (
    <section className="flex flex-col gap-10 bg-transparent">
      <div>
        <h2 className="text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[48px]">Discover</h2>
        <p className="text-center text-[13px] font-bold text-[#BABABA] lg:text-[15px]">
          Climate change is causing many changes in the environment, <br />
          nature, and the natural behavior of our planet.
        </p>
      </div>

      <div className="flex min-h-[350px] overflow-hidden">
        {[1, 2].map(e => (
          <div key={e} className="mt-10 flex animate-loop-scroll gap-20 pl-20 *:size-[100px] *:text-nowrap *:hover:*:text-blue-700 *:sm:size-[140px] lg:gap-40 lg:pl-40 *:lg:size-[244px]">
            {items.map((item, index) => (
              <Link key={index} to={item.link} className="relative flex cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4]">
                <img src={item.imgSrc} alt={item.alt} className="absolute z-50 w-[80px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit" />
                <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DiscoverHomeSection
