import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import data from "../../data/topics.json"

import quiezIcon from "@/assets/global/quiz.svg"
import DifImageOne from "@/assets/topics/greengases/definition/image1.png"
import DifImageTwo from "@/assets/topics/greengases/definition/image2.png"
import DifImageThree from "@/assets/topics/greengases/definition/image3.png"
import ReasonImageOne from "@/assets/topics/greengases/reasons/image1.png"
import ReasonImageTwo from "@/assets/topics/greengases/reasons/image2.png"
import ReasonImageThree from "@/assets/topics/greengases/reasons/image3.png"
import EffImageOne from "@/assets/topics/greengases/effects/image1.png"
import EffImageTwo from "@/assets/topics/greengases/effects/image2.png"
import EffImageThree from "@/assets/topics/greengases/effects/image3.png"
import SolImageOne from "@/assets/topics/greengases/solution/image1.png"
import SolImageTwo from "@/assets/topics/greengases/solution/image2.png"

import useSmoothScroll from "@/hooks/useSmoothScroll"

import "./index.css"

const GreenhouseGases = () => {
  const topic = data.topics.find(t => t.id === "greenhouse-gases")!

  const sections = ["Definition", "Reasons", "Effects", "Solutions"] as const
  const [section, setSection] = useState<"Definition" | "Reasons" | "Effects" | "Solutions">("Definition")

  const targetRef = useRef<HTMLElement>(null)
  useSmoothScroll(400, targetRef)

  return (
    <section className="px-10 lg:px-20">
      <header className="flex flex-wrap items-end justify-between">
        <h2 className="text-nowrap text-lg font-bold sm:text-2xl md:text-3xl">
          <span className="text-[#0B539B]">Learn about </span>
          <span className="text-[#86A41E]">{topic.title}</span>
        </h2>
        <Link
          to={`quiz`}
          className="ml-auto flex items-center justify-center gap-2 text-nowrap rounded-[20px] font-medium text-[#0B539B] max-sm:text-sm md:bg-[#E4FF87] md:px-5 md:py-3 md:text-base md:font-bold"
        >
          <img src={quiezIcon} alt="" className="size-[20px] md:size-[27px]" />
          Go to Quiz
        </Link>
      </header>
      <nav ref={targetRef} className="ml-auto mr-auto mt-10 flex w-full max-lg:justify-between lg:mt-5 lg:justify-center lg:gap-[60px]">
        {sections.map(item => (
          <button
            key={item}
            onClick={() => setSection(item)}
            className={`text-nowrap rounded-[20px] border-[#0B539B] font-medium duration-300 sm:text-xl md:text-2xl lg:h-[65px] lg:w-[212px] lg:border-[1px] ${section === item ? "text-[#0B539B] lg:bg-[#0B539B] lg:text-white" : ""}`}
          >
            {`${item}`}
          </button>
        ))}
      </nav>
      <iframe
        src={`https://www.youtube.com/embed/${topic.video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mx-auto mt-20 h-[200px] w-[350px] rounded-[1rem] sm:h-[280px] sm:w-[500px] md:h-[340px] md:w-[600px] lg:h-[450px] lg:w-[800px]"
      ></iframe>
      <section className="mt-20 pb-20">
        {section === "Definition" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={DifImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is greenhouse gases ?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Greenhouse gases (GHGs) are gases in the Earth’s atmosphere that trap heat. They allow sunlight to enter the atmosphere freely, but when the Earth’s surface emits heat, these gases
                  absorb and re-radiate it, warming the planet. This process is known as the greenhouse effect.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Types of Greenhouse Gases</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Carbon Dioxide (CO2)</h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Sources: Burning fossil fuels (coal, oil, natural gas), deforestation, and various industrial processes.</span>
                  <span>Impact: CO2 is the primary greenhouse gas emitted through human activities and is responsible for about 76% of global GHG emissions1.</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">2. Methane (CH4)</h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Sources: Agriculture (especially livestock), landfills, and natural gas production.</span>
                  <span>Impact: Methane is over 25 times more effective than CO2 at trapping heat in the atmosphere over a 100-year period2.</span>
                </p>
              </figcaption>
              <img src={DifImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={DifImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Nitrous Oxide (N2O)</h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Sources: Agricultural activities (fertilizer use), fossil fuel combustion, and industrial processes.</span>
                  <span>Impact: Nitrous oxide has a global warming potential 298 times that of CO2 over a 100-year period2.</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]"> 4 . Fluorinated Gases</h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Sources: Industrial processes, refrigeration, and the use of various consumer products.</span>
                  <span>
                    Impact: These gases, including hydrofluorocarbons (HFCs), perfluorocarbons (PFCs), and sulfur hexafluoride (SF6), have a high global warming potential and can remain in the
                    atmosphere for a long time2.
                  </span>
                </p>{" "}
              </figcaption>
            </figure>
          </>
        )}
        {section === "Reasons" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">How it Works:</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Sunlight: </h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Solar radiation reaches the Earth's atmosphere, with some of it being reflected back into space and the rest absorbed by the Earth's surface.</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Heat Emission:</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>The Earth’s surface emits heat in the form of infrared radiation.</span>
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Absorption and Re-radiation: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Greenhouse gases absorb this infrared radiation and re-radiate it in all directions, including back towards the Earth's surface, causing warming.</span>
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {section === "Effects" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={EffImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Impacts of Greenhouse Gases</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Sunlight: </h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Increased concentrations of GHGs lead to global warming, resulting in changes in weather patterns, more extreme weather events, and rising sea levels.</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Health Effects:</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Air pollution from GHGs can cause respiratory and cardiovascular diseases.</span>
                </p>
              </figcaption>
              <img src={EffImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={EffImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Ecosystem Disruption </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Changes in temperature and precipitation patterns can disrupt ecosystems and biodiversity.</span>
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {section === "Solutions" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={SolImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  1. Renewable Energy: Transitioning to renewable energy sources like solar, wind, and hydroelectric power to reduce CO2 emissions3.
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  2. Energy Efficiency: Improving energy efficiency in buildings, transportation, and industries to reduce energy consumption and emissions.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  3. Carbon Sequestration: Capturing and storing CO2 from the atmosphere through natural processes (e.g., reforestation) or technological solutions (e.g., carbon capture and storage).
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  4. Policy Measures: Implementing policies and regulations to limit GHG emissions, such as carbon pricing, emission trading systems, and renewable energy incentives.
                </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
      </section>
    </section>
  )
}

export default GreenhouseGases
