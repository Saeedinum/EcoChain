import { useState } from "react";
import { useParams } from "react-router-dom";
import quiezIcon from "@/assets/global/quiz.svg";

const Topic = () => {
  const { id } = useParams();
  const [section, setSection] = useState<
    "Definition" | "Reasons" | "Effects" | "Solutions"
  >("Definition");


  return (
    <section className="pb-20 flex flex-col gap-10">
      <header className="flex items-end justify-between">
        <h2 className="text-3xl font-bold">
          <span className="text-[#0B539B]">Learn about </span>
          <span className="text-[#86A41E]">{id?.split("-").join(" ") || ""}</span>
        </h2>
        <button className="flex h-[54px] w-[184px] items-center justify-center gap-2 rounded-[20px] bg-[#E4FF87] font-medium text-[#0B539B]">
          <img src={quiezIcon} alt="" className="size-[27px" />
          Go to Quiz
        </button>
      </header>
      <nav className="ml-auto mr-auto mt-5 flex gap-[30px]">
        {["Definition", "Reasons", "Effects", "Solutions"].map(
          (item, index) => (
            <button
              key={item}
              onClick={() =>
                setSection(
                  item as "Definition" | "Reasons" | "Effects" | "Solutions",
                )
              }
              className={`h-[65px] w-[212px] rounded-[20px] border-[1px] border-[#0B539B] text-[20px] font-medium text-[#0B539B] duration-300 ${
                section === item ? "bg-[#0B539B] text-white" : ""
              }`}
            >
              {`${index + 1}. ${item}`}
            </button>
          ),
        )}
      </nav>
    </section>
  );
};

export default Topic;
