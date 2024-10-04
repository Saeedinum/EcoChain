import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import quiezIcon from "@/assets/global/quiz.svg"
import data from "../../data/topics.json"

import DifImageOne from "@/assets/topics/water/definition/image1.png"
import DifImageTwo from "@/assets/topics/water/definition/image2.png"
import DifImageThree from "@/assets/topics/water/definition/image3.png"
import DifImageFour from "@/assets/topics/water/definition/image4.png"
import DifImageFive from "@/assets/topics/water/definition/image5.png"
import ReasonImageOne from "@/assets/topics/water/reasons/image1.png"
import ReasonImageTwo from "@/assets/topics/water/reasons/image2.png"
import ReasonImageThree from "@/assets/topics/water/reasons/image3.png"
import ReasonImageFour from "@/assets/topics/water/reasons/image4.png"
import ReasonImageFive from "@/assets/topics/water/reasons/image5.png"
import EffImageOne from "@/assets/topics/water/effects/image1.png"
import EffImageTwo from "@/assets/topics/water/effects/image2.png"
import EffImageThree from "@/assets/topics/water/effects/image3.png"
import EffImageFour from "@/assets/topics/water/effects/image4.png"
import SolImageOne from "@/assets/topics/water/solution/image1.png"
import SolImageTwo from "@/assets/topics/water/solution/image2.png"
import SolImageThree from "@/assets/topics/water/solution/image3.png"
import SolImageFour from "@/assets/topics/water/solution/image4.png"

import useSmoothScroll from "@/hooks/useSmoothScroll"

import "./index.css"

const Water = () => {
  const topic = data.topics.find(t => t.id === "water")!

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
        className="mx-auto my-20 h-[200px] w-[350px] rounded-[1rem] sm:h-[280px] sm:w-[500px] md:h-[340px] md:w-[600px] lg:h-[450px] lg:w-[800px]"
      ></iframe>

      <section className="pb-20">
        {section === "Definition" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={DifImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is Water Resources?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Water resources are natural resources of water that are potentially useful for humans, for example as a source of drinking water supply or irrigation water
                </p>
              </figcaption>
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Types of Water Resources</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Groundwater Resources </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Groundwater is the most plentiful of all freshwater natural resources. Some water flows down through the topsoil, clay, and rock sticks on the uppermost levels of the earth,
                  supplying water to plants. The water in this container is unsaturated. The majority of the gaps in the unsaturated zone are filled with air rather than water.
                </p>
              </figcaption>
              <img src={DifImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>

            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={DifImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Surface Water </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Surface water comes from four major sources. Rivers, lakes, ponds,springs and tanks are examples. There are around 10,360 rivers in the country
                </p>
              </figcaption>
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Saltwater - 97% </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Surface water comes from four major sources. Rivers, lakes, ponds,springs and tanks are examples. There are around 10,360 rivers in the country
                </p>
              </figcaption>
              <img src={DifImageFour} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">4. ICE </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Surface water comes from four major sources. Rivers, lakes, ponds,springs and tanks are examples. There are around 10,360 rivers in the country
                </p>
              </figcaption>
              <img src={DifImageFive} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
        {section === "Reasons" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Water scarcity?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  climate change, Natural disasters, War and conflict , Wastewater , Lack of water data , Lack of infrastructure and Inequality and an imbalance of power
                </p>
              </figcaption>
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Types of Water scarcity</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Natural disasters </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Whether related to climate change or not, according to one UNICEF report nearly 75% of all natural disasters between 2001 and 2018 were water-related. This includes droughts and
                  floods
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>

            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Climate change </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Unsurprisingly, climate change is one of the main reasons behind the global water crisis. The areas most vulnerable to the impacts of climate change.{" "}
                </p>
              </figcaption>
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. War and conflict </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  The ongoing crisis in Syria has led to a well-developed middle-class country lapsing into a water crisis thanks to the destruction of its infrastructure.{" "}
                </p>
              </figcaption>
              <img src={ReasonImageFour} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>

            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">4. Wastewater </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Sometimes water can be plentiful in an area. But whether that water is safe to drink…that’s another story. Many areas of the world have poor systems for dealing with wastewater.{" "}
                </p>
              </figcaption>
              <img src={ReasonImageFive} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
        {section === "Effects" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={EffImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Effects of Sea Level Rise</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  losing that access to drinking water can be detrimental to human health and lives, as we all need water to survive. However, water scarcity and shortage can lead to other serious
                  impacts on the environment and threaten global peace and security as well.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Impacts of Water scarcity </h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Food Shortages</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>With a global population on pace to reach 9.6 billion by 2050, shrinking water resources will make it difficult for food production to keep up with rising demand.</span>
                </p>
              </figcaption>
              <img src={EffImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={EffImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Increased Global Conflict</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span> Freshwater resources are often shared by two or more countries which may lead to more international conflicts as freshwater becomes more scarce.</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Drought</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Reduced water availability for households and businesses Warmer river temperatures, affecting fish and aquatic life Impacts on groundwater levels</span>
                </p>
              </figcaption>
              <img src={EffImageFour} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
        {section === "Solutions" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={SolImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Solution of Water scarcity</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">There are many ways to control Water Scarcity limit usage of water and recycle it with the latest technology.</p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Solutions of Water scarcity </h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Recycle wastewater</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>
                    Some countries, like Singapore, are trying to recycle to cut water imports and become more self-sufficient. The rich East Asian republic is a leader in developing advanced
                    technology that cleanses wastewater for other uses.
                  </span>
                </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">2. climate change mitigation</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>
                    As renewable energy options are pursued, the water consumption of these mitigation tactics must be considered in producing alternatives ranging from bio-energy crops to hydropower
                    and solar power plants.
                  </span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Population growth control</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Because of the accelerating growth in global population, parts of the world could see a supply-demand gap of up to 65 percent in water resources by 2030.</span>
                </p>
              </figcaption>
              <img src={SolImageFour} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
      </section>
    </section>
  )
}

export default Water
