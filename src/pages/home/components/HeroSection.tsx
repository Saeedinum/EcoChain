import leftBackground from "@/assets/home/leftbackground.png"
import rightBackground from "@/assets/home/rightbackground.png"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import Earth from "@/components/Earth"

const HeroSection = () => {
  return (
    <section className="overflow- relative flex h-[80vh] flex-col items-center gap-5 pb-20 lg:h-screen lg:flex-row lg:justify-between lg:px-[5rem] lg:pb-[15rem]">
      <div className="flex flex-col items-center gap-10">
        <h1 className="flex flex-col items-center gap-2 text-nowrap text-center text-[25px] font-extrabold text-[#0B539B] lg:text-[45px]">
          <span>WHAT</span>
          <span> CLIMATE CHANGE</span>
          <span>DO ?!</span>
        </h1>
      </div>

      <Canvas className="h-[600px] w-[700px]">
        {/* <ambientLight /> */}
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <img src={leftBackground} alt="" className="absolute left-0 top-0 -z-10 max-lg:w-[452px]" />
      <img src={rightBackground} alt="" className="absolute right-0 top-0 -z-10 hidden max-lg:w-[384px] lg:block" />
    </section>
  )
}

export default HeroSection
