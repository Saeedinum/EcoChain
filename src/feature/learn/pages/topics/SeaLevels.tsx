import { useState } from "react"
import { Link } from "react-router-dom"
import quiezIcon from "@/assets/global/quiz.svg"
import data from "../../data/topics.json"

import DifImageOne from "@/assets/topics/sea/definition/image1.png"
import DifImageTwo from "@/assets/topics/sea/definition/image2.png"

import ReasonImageOne from "@/assets/topics/sea/reasons/image1.png"
import ReasonImageTwo from "@/assets/topics/sea/reasons/image2.png"
import ReasonImageThree from "@/assets/topics/sea/reasons/image3.png"

import EffImageOne from "@/assets/topics/sea/effects/image1.png"
import EffImageTwo from "@/assets/topics/sea/effects/image2.png"
import EffImageThree from "@/assets/topics/sea/effects/image3.png"

import SolImageOne from "@/assets/topics/sea/solution/image1.png"
import SolImageTwo from "@/assets/topics/sea/solution/image2.png"
import SolImageThree from "@/assets/topics/sea/solution/image3.png"

import "./index.css"

const SeaLevels = () => {
  const topic = data.topics.find(t => t.id === "renewable-energy")!

  const sections = ["Definition", "Reasons", "Effects", "Solutions"] as const
  const [section, setSection] = useState<"Definition" | "Reasons" | "Effects" | "Solutions">("Definition")
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
      <nav className="ml-auto mr-auto mt-10 flex w-full max-lg:justify-between lg:mt-5 lg:justify-center lg:gap-[60px]">
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

      <section className="mt-20 pb-20">
        {section === "Definition" && (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${topic.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="mx-auto my-20 h-[200px] w-[350px] rounded-[1rem] sm:h-[280px] sm:w-[500px] md:h-[340px] md:w-[600px] lg:h-[450px] lg:w-[800px]"
            ></iframe>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={DifImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is Sea Level?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  It refers to the average height of the ocean's surface, or the midpoint between high tide and low tide, used as a standard to measure land elevation and ocean depths. It serves as a
                  baseline for determining the height of geographic features and structures
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="dots *:block sm:text-[20px]">
                  Sea level can fluctuate due to various factors such as tides, atmospheric pressure, ocean currents, and long-term changes like climate-related sea level rise caused by the melting of
                  polar ice and glaciers, as well as thermal expansion of seawater as it warms
                </p>
              </figcaption>
              <img src={DifImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
        {section === "Reasons" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">1. Thermal Expansion of Seawater: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>As oceans warm due to climate change, water expands</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">2. Melting of Ice Sheets and Glaciers: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Melting ice from Greenland and Antarctica adds more water to the oceans</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Loss of Arctic Sea Ice: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Affects ocean temperature, contributing to thermal expansion</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">4. Land Subsidence: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Affects ocean temperature, contributing to thermal expansion</span>
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">5. Groundwater Extraction: </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Excessive use of groundwater can lead to more water flowing into the oceans</span>
                </p>
              </figcaption>
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
                  Sea Level Rise threaten dozens of major coastal cities, resulting in reduced land area, coastal flooding, and greater chances of severe storms, and the need to mitigate these
                  effects.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">1. Coastal Flooding</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Low-lying coastal areas become more prone to frequent flooding and storm surges.</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">2. Shoreline Erosion</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span> Coastlines erode, leading to the loss of land and property.</span>
                </p>
              </figcaption>
              <img src={EffImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={EffImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Saltwater Intrusion</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Seawater infiltrates freshwater sources, contaminating drinking water and affecting agriculture.</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">4. Destruction of Coastal Ecosystems </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Habitats like mangroves and coral reefs are at risk of being submerged.</span>
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {section === "Solutions" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={SolImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Solution of Sea Level Rise</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Experts recommend floating cities for areas at risk of flooding, and the project usually consists of wooden walls that help protect buildings and keep water away by raising homes on
                  sturdy stilts.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]"> 1. Mitigation of Climate Change</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">Shift to renewable energy sources like solar and wind, Improve energy efficiency and reduce industrial emissions.</p>
                <h3 className="text-lg font-bold sm:text-[20px]">2. Adaptation to Sea Level Rise</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Build seawalls, dikes, and storm surge barriers to protect coastal areas, Restore natural barriers like mangroves, wetlands, and coral reefs.
                </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="mt-5 text-lg font-bold sm:text-[20px]">3. Coastal Management</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">Implement zoning laws that restrict development in high-risk coastal areas.</p>
                <h3 className="text-lg font-bold sm:text-[20px]">4. Raising Awareness and Research</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">Increase public awareness about the risks of sea level rise. </p>
              </figcaption>
            </figure>
          </>
        )}
      </section>
    </section>
  )
}

export default SeaLevels
