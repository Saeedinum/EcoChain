import { useState } from "react"
import { Link } from "react-router-dom"
import quiezIcon from "@/assets/global/quiz.svg"
import data from "../../data/topics.json"

import DifImageOne from "@/assets/topics/wildfires/definition/image1.png"

// import ReasonImageOne from "@/assets/topics/wildfires/effects/image1.png"
// import ReasonImageTwo from "@/assets/topics/wildfires/effects/image2.png"
// import ReasonImageThree from "@/assets/topics/wildfires/effects/image3.png"

import EffectImageOne from "@/assets/topics/wildfires/reasons/image1.png"
import EffectImageTwo from "@/assets/topics/wildfires/reasons/image2.png"
import EffectImageThree from "@/assets/topics/wildfires/reasons/image3.png"

import SolImageOne from "@/assets/topics/wildfires/solution/image1.png"
import SolImageTwo from "@/assets/topics/wildfires/solution/image2.png"
import SolImageThree from "@/assets/topics/wildfires/solution/image3.png"

import "./index.css"

const WildFires = () => {
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

      <iframe
        src={`https://www.youtube.com/embed/${topic.video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mx-auto mt-20 h-[200px] w-[350px] rounded-[1rem] sm:h-[280px] sm:w-[500px] md:h-[340px] md:w-[600px] lg:h-[450px] lg:w-[800px]"
      ></iframe>

      <section className="mt-20 pb-20">
        {section === "Definition" && (
          <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
            <img src={DifImageOne} alt="" className="max-sm:w-[300px]" />
            <figcaption className="max-w-[488px] text-center">
              <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is Wild Fires ?</h2>
              <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                Wildfires are uncontrolled fires that burn in wildland vegetation such as forests, grasslands, and prairies. They can start from natural causes like lightning or human activities such
                as unattended campfires or arson1
              </p>
            </figcaption>
          </figure>
        )}
        {section === "Reasons" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={EffectImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Wild Fires ?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Wild Fires are caused by two main factors: Natural Causes and Human Activities also Elements Needed for a Fire: Heat , Fuel and Oxygen.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Wild Fires</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Natural Causes</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Lightning: One of the most common natural causes of wildfires. Lightning strikes can ignite dry vegetation, leading to fires.</span>
                  <span>Volcanic Eruptions: Lava flows and pyroclastic flows can ignite fires in surrounding vegetation.</span>
                </p>
              </figcaption>
              <img src={EffectImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <img src={EffectImageThree} alt="" className="max-sm:w-[300px] md:order-1" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Human Activities</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span> Unattended Campfires: Campfires left unattended or not properly extinguished can start wildfires.</span>
                  <span> Arson: Deliberate setting of fires.</span>
                  <span> Agricultural Burns: Controlled burns that get out of control.</span>
                  <span> Discarded Cigarettes: Cigarettes thrown on dry vegetation can ignite fires.</span>
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {/* {section === "Effects" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Wild Fires ?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Wild Fires are caused by two main factors: Natural Causes and Human Activities also Elements Needed for a Fire: Heat , Fuel and Oxygen.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">Reasons of Wild Fires</h2>
                <h3 className="text-lg font-bold sm:text-[20px]">1. Natural Causes</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Lightning: One of the most common natural causes of wildfires. Lightning strikes can ignite dry vegetation, leading to fires.</span>
                  <span>Volcanic Eruptions: Lava flows and pyroclastic flows can ignite fires in surrounding vegetation.</span>
                </p>
                <h3 className="text-lg font-bold sm:text-[20px]">2. Human Activities</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span> Unattended Campfires: Campfires left unattended or not properly extinguished can start wildfires.</span>
                  <span> Arson: Deliberate setting of fires.</span>
                  <span> Agricultural Burns: Controlled burns that get out of control.</span>
                  <span> Discarded Cigarettes: Cigarettes thrown on dry vegetation can ignite fires.</span>
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
          </>
        )} */}
        {section === "Solutions" && (
          <>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="mt-5 text-lg font-bold sm:text-[20px]">3. Firebreaks</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">Creating gaps in vegetation to stop the spread of fires.</p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">1. Controlled Burns:</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">Intentionally setting small, controlled fires to reduce the amount of combustible material. </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="mt-5 text-lg font-bold sm:text-[20px]">3. Public Awareness: </h3>
                <p className="dots *:block sm:text-[20px]">
                  <span>Early Detection: Using technology like satellite monitoring and drones to detect fires early.</span>
                  <span>Eductating the public about fire safety and prevention measures</span>
                </p>
              </figcaption>
            </figure>
          </>
        )}
      </section>
    </section>
  )
}

export default WildFires
