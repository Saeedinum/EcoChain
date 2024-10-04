import delgaciation from "@/assets/discover/Delgaciation.png"
import drought from "@/assets/discover/Drought.png"
import eruption from "@/assets/discover/Eruption.png"
import landSlide from "@/assets/discover/Land slide.png"
import tornado from "@/assets/discover/Torando.png"
import tsunami from "@/assets/discover/Tsunami.png"
import wildFires from "@/assets/discover/Wild Fires.png"
import earthCo2 from "@/assets/discover/earthCo2.png"
import earchImage from "@/assets/discover/earthCo2.png"

const Discover = () => {
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
      <section className="itmes-center px-10 gap-5 my-32 flex flex-nowrap justify-center *:flex-1">
        <div className=" *:mt-2 *:ml-5 *:*:-ml-5">
          <p className="text-gray-600">
            <span className="font-bold text-black">Location:</span> Southern United States
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black block">Event:</span> In April 2011, a massive tornado outbreak struck multiple states, including Alabama, Mississippi, and Tennessee. It was one of the
            largest and deadliest tornado outbreaks in U.S. history, with over 360 confirmed tornadoes during the event.
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black block">Impact:</span> The outbreak caused widespread destruction, leading to the deaths of over 300 people and damaging thousands of homes. Cities like
            Tuscaloosa, Alabama, were severely hit.
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-black block">Effect on Population:</span> The disaster led to increased awareness of the importance of early warning systems, prompting the National Weather
            Service to enhance their tornado tracking and alert systems.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Oh9FyPJ0yus?si=oty21L6BvQwuhMzH&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="h-[380px] w-[500px] rounded-[20px] bg-gray-300"
        ></iframe>
      </section>
    </main>
  )
}

export default Discover
