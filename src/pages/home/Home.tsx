import HeroSection from "./components/HeroSection";

import delgaciation from "@/assets/home/Delgaciation.png";
import drought from "@/assets/home/Drought.png";
import eruption from "@/assets/home/Eruption.png";
import landSlide from "@/assets/home/Land slide.png";
import tornado from "@/assets/home/Torando.png";
import tsunami from "@/assets/home/Tsunami.png";
import wildFires from "@/assets/home/Wild Fires.png";
import earthCo2 from "@/assets/home/earthCo2.png";
import learn from "@/assets/home/learn.png";
import play from "@/assets/home/play.png";

import "./index.css";

const Home = () => {
  return (
    <main className="select-none overflow-hidden">
      <HeroSection />
      <section className="flex flex-col gap-10">
        <div>
          <h2 className="text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[48px]">
            Discover
          </h2>
          <p className="flex flex-col items-center text-[13px] font-bold text-[#BABABA] lg:text-[15px]">
            <span> Lorem ipsum dolor sit amet consectetur. Risus</span>
            <span> eros tincidunt justo mauris nullam. Arcu ut nulla</span>
            <span>odio vitae viverra tincidunt.</span>
          </p>
        </div>
        <div className="relative flex h-[80vh] w-full items-center justify-center bg-transparent sm:h-[100vh] lg:my-20 lg:h-[170vh]">
          <div className="absolute left-[50%] top-20 z-50 flex size-[70px] translate-x-[-50%] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:top-0 lg:size-[244px]">
            <img
              src={delgaciation}
              alt="Delgaciation"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Delgaciation
            </span>
          </div>

          <div className="absolute left-[3rem] top-[12rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:left-[10rem] lg:size-[244px]">
            <img
              src={tornado}
              alt="Tornado"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Torando
            </span>
          </div>

          <div className="absolute left-[3rem] top-[21rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:top-[24rem] sm:size-[140px] lg:left-[10rem] lg:top-[34rem] lg:size-[244px]">
            <img
              src={eruption}
              alt="eruption"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Eruption
            </span>
          </div>

          <div className="absolute left-[6rem] top-[30rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:left-[10rem] sm:top-[38rem] sm:size-[140px] lg:left-[20rem] lg:top-[54rem] lg:size-[244px]">
            <img
              src={drought}
              alt="drought"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Drought
            </span>
          </div>

          <div className="absolute right-[3rem] top-[12rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:right-[10rem] lg:size-[244px]">
            <img
              src={wildFires}
              alt="Tornado"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Wild Fires
            </span>
          </div>

          <div className="absolute right-[3rem] top-[21rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:top-[24rem] sm:size-[140px] lg:right-[10rem] lg:top-[34rem] lg:size-[244px]">
            <img
              src={landSlide}
              alt="Tornado"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Land slide
            </span>
          </div>

          <div className="absolute right-[6rem] top-[30rem] flex size-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFE4] sm:right-[10rem] sm:top-[38rem] sm:size-[140px] lg:right-[20rem] lg:top-[54rem] lg:size-[244px]">
            <img
              src={tsunami}
              alt="Tornado"
              className="absolute z-50 w-[45px] transition-transform duration-300 hover:scale-110 sm:w-[100px] lg:w-fit"
            />
            <span className="absolute -bottom-10 text-sm font-bold lg:text-[20px]">
              Tsunami
            </span>
          </div>
          <img
            src={earthCo2}
            alt="Earth CO2"
            className="w-[114px] sm:mt-52 sm:w-[150px] lg:w-[300px]"
          />
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-10 sm:mt-52 md:mt-60 md:flex-row md:justify-center md:gap-40">
        <p className="absolute -right-1 -top-52 -z-10 h-[269px] w-[32px] rotate-[-27deg] rounded-[333px] bg-[#FFFFE4] lg:-right-32 lg:h-[1313px] lg:w-[89px]"></p>
        {/* <p className="lg:w-[103px] w-[43px] h-[556px] lg:h-[1313px] rotate-[24deg] -z-10 left-20 sm:left-[11rem] sm:rotate-[40deg] absolute top-[5rem]    bg-[#E4F6FF]  rounded-[333px] "></p> */}

        <img src={learn} alt="" className="w-[191px] md:w-[250px] lg:w-fit" />
        <div className="flex flex-col items-center gap-8">
          <h2 className="flex flex-col items-center gap-2 text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[45px]">
            Learn with quiz
          </h2>
          <p className="w-[305px] text-center text-[12px] font-medium text-[#B5B5B5] lg:w-[500px] lg:text-[20px]">
            Learning about climate change is essential to understanding its
            impact on our planet. It involves studying how human activities like
            burning fossil fuels and deforestation are altering global
            temperatures and weather patterns. These changes lead to severe
            weather events, rising sea levels, and threats to ecosystems.
            Gaining knowledge about climate change helps you recognize the
            urgency of the issue and empowers you to take part in solutions that
            promote a sustainable future.
          </p>
          <button className="h-[54px] w-[174px] rounded-[20px] bg-[#528FCC] bg-gradient-to-r font-bold text-white hover:from-[#528FCC] hover:to-[#E4FF87] lg:w-[238px] lg:text-[20px]">
            Learn more
          </button>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center gap-10 md:flex-row md:justify-center lg:gap-40">
        <div className="flex flex-col items-center gap-8">
          <h2 className="flex flex-col items-center gap-2 text-nowrap text-center text-[24px] font-extrabold text-[#0B539B] lg:text-[45px]">
            Play and Fun
          </h2>
          <p className="w-[305px] text-center text-[12px] font-medium text-[#B5B5B5] lg:w-[500px] lg:text-[20px]">
            In the "Play and Fun" section, we offer interactive games and
            quizzes that make learning about climate change engaging and
            enjoyable. These activities help users grasp complex concepts while
            having a great time, blending education with entertainment to
            inspire action and creativity.
          </p>
          <button className="h-[54px] w-[174px] rounded-[20px] bg-[#528FCC] bg-gradient-to-r font-bold text-white hover:from-[#528FCC] hover:to-[#E4FF87] lg:w-[238px] lg:text-[20px]">
            Play now
          </button>
        </div>
        <img src={play} alt="" className="w-[300px] lg:w-fit" />
      </section>
    </main>
  );
};

export default Home;
