import { NavLink, Outlet } from "react-router-dom"

import data from "../data/topics.json"

import rightBackground from "@/assets/learn/rightBackground.png"
import leftBackground from "@/assets/learn/leftBackground.png"

const Learn = () => {
  return (
    <>
      <main className="relative h-[100vh] w-full pt-20">
        <img src={leftBackground} alt="" className="absolute -top-40 left-0 -z-10 max-md:w-1/2" />
        <img src={rightBackground} alt="" className="absolute -top-40 right-0 -z-10 max-md:w-1/2" />
        <section className="flex w-full flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-center text-2xl font-extrabold text-[#0B539B] sm:text-3xl md:text-4xl lg:text-[64px] lg:leading-[5rem]">
            Learn about <br />
            climate change{" "}
          </h1>
          <p className="hidden w-[30%] text-[15px] font-bold text-[#BABABA] lg:block">
            Lorem ipsum dolor sit amet consectetur. Risus eros tincidunt justo mauris nullam. Arcu ut nulla odio vitae viverra tincidunt.
          </p>
        </section>
        <section className="mt-20 px-10 lg:px-20">
          <h2 className="text-xl font-semibold text-[#212121] sm:text-2xl md:text-3xl">Choose your topic</h2>
          <nav className="grid grid-cols-2 flex-wrap items-center gap-y-4 overflow-y-auto max-sm:flex max-sm:flex-nowrap sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data.topics.map(topic => (
              <NavLink key={topic.id} to={`/learn/${topic.id}`} className={({ isActive, isPending }) => (isPending ? "pendingTopic" : isActive ? "activeTopic" : "")}>
                <figure key={topic.id} className="flex h-[180px] cursor-pointer flex-col items-center justify-end gap-3 text-center max-sm:w-[180px] sm:h-[200px]">
                  <img src={topic.logo} alt={topic.title} className="w-fit bg-cover max-sm:w-[100px]" />
                  <figcaption className="text-nowrap font-medium sm:text-[18px] sm:font-bold">{topic.title}</figcaption>
                </figure>
              </NavLink>
            ))}
          </nav>
          <hr className="my-3 mt-10 h-[2px] w-full bg-[#B7B7B7]" />
        </section>
        <Outlet />
      </main>
    </>
  )
}

export default Learn
