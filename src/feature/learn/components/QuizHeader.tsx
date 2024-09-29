import { Link } from "react-router-dom"

const QuizHeader = ({ image, title }: { image: string; title: string }) => {
  return (
    <header className="flex items-center justify-start gap-5 px-3 pt-2 md:px-10">
      <img src={image} alt="" className="hidden max-md:size-[60px] md:block" />
      <h1 className="text-nowrap text-xl font-extrabold text-[#0B539B] sm:text-2xl md:text-3xl">{title} Quiz</h1>
      <Link
        to={`/learn/${title}`}
        className="border-nonde outline-nonde ml-auto h-[54px] content-center text-nowrap rounded-[20px] text-center text-[20px] font-bold text-white duration-100 max-lg:text-[#528FCC] hover:max-lg:text-[#0B539B] max-md:text-sm lg:w-[238px] lg:bg-[#528FCC] hover:lg:bg-[#0B539B]"
      >
        Back to Learn
      </Link>
    </header>
  )
}

export default QuizHeader
