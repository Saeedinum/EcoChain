import { NavLink, useParams } from "react-router-dom"

import data from "../data/topics.json"

import Topic from "../components/Topic"

import rightBackground from "@/assets/learn/rightBackground.png"
import leftBackground from "@/assets/learn/leftBackground.png"

const Learn = () => {
  const { id } = useParams()

  return (
    <main className="relative h-[100vh] w-full pt-20">
      <img src={leftBackground} alt="" className="absolute -top-40 left-0 -z-10" />
      <img src={rightBackground} alt="" className="absolute -top-40 right-0 -z-10" />
      <section className="flex w-full flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-center text-[64px] font-extrabold leading-[5rem] text-[#0B539B]">
          Learn about <br />
          climate change{" "}
        </h1>
        <p className="w-[30%] text-[15px] font-bold text-[#BABABA]">Lorem ipsum dolor sit amet consectetur. Risus eros tincidunt justo mauris nullam. Arcu ut nulla odio vitae viverra tincidunt.</p>
      </section>
      <section className="mt-20 px-20">
        <h2 className="text-3xl font-semibold text-[#212121]">Choose your topic</h2>
        <nav className="grid grid-cols-5 flex-wrap items-center gap-[5rem] gap-y-4">
          {data.topics.map(topic => (
            <NavLink key={topic.id} to={`/learn/${topic.id}`} className={({ isActive, isPending }) => (isPending ? "pendingTopic" : isActive ? "activeTopic" : "")}>
              <figure key={topic.id} className="flex h-[200px] cursor-pointer flex-col items-center justify-end gap-3 text-center">
                <img src={topic.logo} alt={topic.title} className="w-fit bg-cover" />
                <figcaption className="font-vold text-nowrap text-[18px] font-bold">{topic.title}</figcaption>
              </figure>
            </NavLink>
          ))}
        </nav>
        <hr className="my-3 mt-10 h-[2px] w-full bg-[#B7B7B7]" />
      </section>
      <section className="mt-20 px-20">{id && <Topic />}</section>
    </main>
  )
}

export default Learn
