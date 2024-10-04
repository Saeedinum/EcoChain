import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import data from "../../data/topics.json"

import quiezIcon from "@/assets/global/quiz.svg"
import DifImageOne from "@/assets/topics/airQuality/definition/image1.png"
import ReasonImageOne from "@/assets/topics/airQuality/reasons/image1.png"
import ReasonImageTwo from "@/assets/topics/airQuality/reasons/image2.png"
import ReasonImageThree from "@/assets/topics/airQuality/reasons/image3.png"
import EffImageOne from "@/assets/topics/airQuality/effects/image1.png"
import SolImageOne from "@/assets/topics/airQuality/solution/image1.png"
import SolImageTwo from "@/assets/topics/airQuality/solution/image2.png"
import SolImageThree from "@/assets/topics/airQuality/solution/image3.png"
import SolImageFour from "@/assets/topics/airQuality/solution/image4.png"

import useSmoothScroll from "@/hooks/useSmoothScroll"

import "./index.css"

const AirQuality = () => {
  const topic = data.topics.find(t => t.id === "air-quality")!

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
      <section className="mt-20 pb-20">
        {section === "Definition" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={DifImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-center">
                <h2 className="text-2xl font-bold text-[#0B539B] sm:text-3xl">What is Air Quality ?</h2>
                <p className="font-bold text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  Air quality refers to the condition or cleanliness of the air in a specific environment. It is determined by the concentration of pollutants, such as particulate matter (PM2.5,
                  PM10), ozone (O3), nitrogen dioxide (NO2), sulfur dioxide (SO2), and carbon monoxide (CO), among others. Good air quality means the air is clean and free from harmful pollutants,
                  while poor air quality indicates high levels of contamination that can pose risks to human health and the environment.
                </p>
              </figcaption>
            </figure>
          </>
        )}
        {section === "Reasons" && (
          <section className="">
            <h1 className="text-center text-3xl font-bold">World's Air Polluation : Real-time Air Quality Index</h1>
            <div className="border-10 border-sloid left-0 top-0 mx-auto my-10 mb-20 h-[500px] w-[800px] rounded-[5rem] border-gray-700">
              <div className="overflow-hidden"></div>
              <iframe src="https://waqi.info/#/c/6.627/-2.109/2z" scrolling="no" className="-mt-15 h-full w-full overflow-hidden border-0"></iframe>
            </div>

            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">1. Industrial Sources </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>Through the resulting fossil fuel emissions, as these emissions contain carbon dioxide, methane, and nitrous oxide, which causes air poisoning.</span>
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Air Pollution from Transportation</h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>
                    Transportation is one of the largest contributors to air pollution, particularly in urban areas. The burning of fossil fuels such as gasoline and diesel in vehicles releases
                    various harmful pollutants into the atmosphere. Here are the key points related to air pollution from transportation
                  </span>
                </p>
              </figcaption>
              <img src={ReasonImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={ReasonImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <h3 className="text-lg font-bold sm:text-[20px]">2. Natural Environmental </h3>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  <span>
                    Dust, toxic gases and fires The burning of fossil fuels such as coal and oil releases many pollutants into the atmosphere, which in turn cause smog, acid rain and greenhouse gas
                    emissions.
                  </span>
                </p>
              </figcaption>
            </figure>
          </section>
        )}
        {section === "Effects" && (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${topic.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="mx-auto mt-20 h-[200px] w-[350px] rounded-[1rem] sm:h-[280px] sm:w-[500px] md:h-[340px] md:w-[600px] lg:h-[450px] lg:w-[800px]"
            ></iframe>
            <figure className="mt-20 flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <figcaption className="max-w-[488px] text-center">
                <h2 className="mb-5 text-2xl font-bold text-[#0B539B] sm:text-3xl">The Impact of Air Quality on Ecosystems</h2>
                <p className="text-start font-bold text-[hsla(0,0%,0%,0.62)] *:block sm:text-[20px]">
                  <span>1. Vegetation: Poor air quality can damage plant leaves, reducing photosynthesis and crop yields. Pollutants like ozone harm plant health and productivity.</span>
                  <span>2. Soil: Airborne pollutants can alter soil chemistry, affecting nutrient availability and soil fertility, which impacts plant growth.</span>
                  <span>3. Water Bodies: Pollutants lead to acid rain and nutrient pollution, harming aquatic life and disrupting water quality.</span>
                  <span>4. Wildlife: Air pollution causes respiratory issues and disrupts habitats, affecting wildlife health and survival.</span>
                  <span>5. Ecosystem Services: Pollution can impair essential services like pollination and water regulation, affecting the overall health of ecosystems.</span>
                </p>
              </figcaption>
              <img src={EffImageOne} alt="" className="max-sm:w-[300px]" />
            </figure>
          </>
        )}
        {section === "Solutions" && (
          <>
            <figure className="flex items-center justify-between gap-10 max-lg:flex-col lg:justify-evenly">
              <img src={SolImageOne} alt="" className="max-sm:w-[300px]" />
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  1. Monitoring Air Quality with Your Smartphone: Apps like AirVisual and Breezometer provide real-time air quality data, helping users make health-conscious decisions like wearing
                  masks and avoiding outdoor activities during high pollution periods.
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  2. Electric Cars and Pollution Reduction: Electric vehicles (EVs) like Tesla reduce carbon emissions, helping cities with air pollution. The article explores the impact of EVs and
                  the charging infrastructure.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  3. Solar Panels and Air Pollution: Solar panels generate clean energy, reducing reliance on fossil fuels, lowering emissions, and improving air quality.
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  4. Smart Agriculture and the Environment: AI and sensors in farming reduce pesticide and water use, minimizing air and water pollution.
                </p>
              </figcaption>
              <img src={SolImageTwo} alt="" className="max-sm:w-[300px] md:order-1" />
            </figure>
            <figure className="flex items-center justify-between max-lg:flex-col lg:justify-evenly">
              <img src={SolImageThree} alt="" className="max-sm:w-[300px]" />
              <figcaption className="max-w-[488px] text-start">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  5. Wearable Devices and Environmental Health: Devices like Fitbit track air quality and alert users when pollution levels are high, helping improve health and reduce exposure to
                  pollution.
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  6. AI and Environmental Understanding: AI analyzes data to predict environmental disasters and monitor the impact of climate change, helping governments and institutions protect
                  public health.
                </p>
              </figcaption>
            </figure>
            <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
              <figcaption className="order-2 max-w-[488px] text-start md:order-1">
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  7. Smart Buildings and Pollution Reduction: Smart buildings optimize energy use, improving indoor air quality and reducing environmental pollution.
                </p>
                <p className="text-[hsla(0,0%,0%,0.62)] sm:text-[20px]">
                  8. Recycling and Greenhouse Gas Reduction: Recycling reduces waste, preventing emissions from burning or burying materials, and improving air quality.
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

export default AirQuality
