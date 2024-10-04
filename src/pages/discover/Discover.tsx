import { useParams } from "react-router-dom"
import EventDetials from "./components//Event"
import earchImage from "@/assets/discover/earthCo2.png"
import data from "./data.json"

const Discover = () => {
  const { id } = useParams()
  const topic = data.topics.find(e => e.id === id)

  if (!id && !topic) {
    return (
      <main className="w-full">
        <header className="">
          <figure className="flex flex-row items-center justify-evenly">
            <img src={earchImage} alt="" className="w-[114px] sm:w-[150px] lg:w-[250px]" />
            <figcaption className="flex max-w-[500px] flex-col items-center gap-5">
              <h1 className="text-center text-2xl font-extrabold text-[#0B539B] sm:text-3xl md:text-4xl">Discover</h1>
              <p className="hidden text-center text-[15px] font-bold text-[#BABABA] lg:block">
                Throughout history, humanity has witnessed numerous natural and man-made disasters that caused widespread destruction and loss of life. From earthquakes to tsunamis and etc., each
                disaster left a significant impact and taught valuable lessons about resilience and preparedness. In this section, we highlight some of the most notable disasters and how they were
                faced.
              </p>
            </figcaption>
          </figure>
        </header>
        <p className="mx-10 my-10 h-[1px] bg-blue-300 "></p>
        {data.topics.map(topic => (
          <EventDetials id={topic.id} />
        ))}
      </main>
    )
  }

  return <main className="w-full">{id && data && <EventDetials id={id} />}</main>
}

export default Discover
