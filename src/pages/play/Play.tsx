import imageOne from "@/assets/play/image1.png"
import imageTwo from "@/assets/play/image2.png"
import imageThree from "@/assets/play/image3.png"
import { Link } from "react-router-dom"

const Play = () => {
  return (
    <main className="flex flex-col">
      <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
        <img src={imageOne} alt="" className="w-2/3 lg:max-w-[500px]" />
        <figcaption className="flex max-w-[488px] flex-col justify-center gap-5">
          <h2 className="text-2xl font-bold text-[#86A41E] sm:text-3xl">Sea Levels Rise</h2>
          <Link to={"https://climatekids.nasa.gov/time-machine/"} className="mx-auto rounded-[10px] bg-blue-600 px-3 py-2 font-bold text-white">
            Click Here
          </Link>
        </figcaption>
      </figure>
      <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
        <figcaption className="flex max-w-[488px] flex-col justify-center gap-5 max-lg:order-2">
          <h2 className="text-2xl font-bold text-[#86A41E] sm:text-3xl">Global Temperature</h2>
          <Link to={"https://climatekids.nasa.gov/time-machine/"} className="mx-auto rounded-[10px] bg-blue-600 px-3 py-2 font-bold text-white">
            Click Here
          </Link>
        </figcaption>
        <img src={imageTwo} alt="" className="w-2/3 lg:max-w-[500px]" />
      </figure>
      <figure className="my-20 flex items-center justify-between gap-10 max-lg:flex-col lg:my-32 lg:justify-evenly">
        <img src={imageThree} alt="" className="w-2/3 lg:max-w-[500px]" />
        <figcaption className="flex max-w-[488px] flex-col justify-center gap-5">
          <h2 className="text-2xl font-bold text-[#86A41E] sm:text-3xl">Greenhouse Gases</h2>
          <Link to={"https://climatekids.nasa.gov/greenhouse-cards/"} className="mx-auto rounded-[10px] bg-blue-600 px-3 py-2 font-bold text-white">
            Click Here
          </Link>
        </figcaption>
      </figure>
    </main>
  )
}

export default Play
