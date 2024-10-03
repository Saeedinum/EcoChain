import { useState } from "react"
import { Link } from "react-router-dom"
import quiezIcon from "@/assets/global/quiz.svg"
import data from "../../data/topics.json"

import DifImageOne from "@/assets/topics/soil/definition/image1.png"

import ReasonImageOne from "@/assets/topics/soil/reasons/image1.png"
import ReasonImageTwo from "@/assets/topics/soil/reasons/image2.png"
import ReasonImageThree from "@/assets/topics/soil/reasons/image3.png"
import ReasonImageFour from "@/assets/topics/soil/reasons/image4.png"

import EffImageOne from "@/assets/topics/soil/effects/image1.png"
import EffImageTwo from "@/assets/topics/soil/effects/image2.png"
import EffImageThree from "@/assets/topics/soil/effects/image3.png"

import SolImageOne from "@/assets/topics/soil/solution/image1.png"
import SolImageTwo from "@/assets/topics/soil/solution/image2.png"
import SolImageThree from "@/assets/topics/soil/solution/image3.png"

import "./index.css"

const Soil = () => {
  const topic = data.topics.find(t => t.id === "soil")!

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
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is Soil ?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  It is a mixture of organic matter, minerals, gases, liquids, and living organisms that together support the life of plants and living organisms in the soil and are suitable for
                  agriculture.
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {section === "Reasons" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Soil degradation</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  The condition of agricultural soil can deteriorate as a result of many factors, including natural and human factors.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">1. Erosion</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Intensive agriculture leads to soil erosion, especially when natural vegetation that stabilizes the soil is removed.</span>
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Chemical Composition</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>The use of fertilizers and pesticides affects the chemical composition of the soil, leading to the accumulation of chemicals and a reduction in microbial diversity.</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">3. Massive usage</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Soil may suffer from degradation due to intensive farming, including loss of organic matter, decreased soil fertility, and increased soil compaction.</span>
                </p>
              </figcaption>
              <img src={ReasonImageFour} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )}
        {section === "Effects" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={EffImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Effects of Soil degradation</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">food shortage, low crop yield, negative impact on agriculture, increased exposure to flooding, poor water quality.</p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Impacts of Wild Fires</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Water Scarcity</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>soil erosion can affect water infiltration, storage and drainage in the soil, leading to waterlogging and water scarcity.</span>
                </p>
              </figcaption>
              <img src={EffImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={EffImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Crops Contamination</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Contamination of agricultural crops, which leads to harm to the health of humans who feed on them directly, and through the transfer of pollutants to animal products.</span>
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
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Solution of Soil degradation</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  We must take action to protect agricultural soil from pollution, to protect future crops, and to protect future generations.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">Solution of Soil degradation</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Reduce Soil Erosion</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Precision agriculture uses GPS technology and data analytics to monitor crop growth and soil conditions with high accuracy. By applying this technology, farmers can optimize the use
                  of fertilizers and irrigation, which helps in maintaining soil health and reducing erosion.
                </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="mt-5 text-lg font-bold sm:text-[20px]">2. Cover crops</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  plants grown to cover the soil rather than for harvest. They help protect soil from erosion, improve soil fertility, and enhance water retention
                </p>
              </figcaption>
            </figure>
          </>
        )}
      </section>
    </section>
  )
}

export default Soil
