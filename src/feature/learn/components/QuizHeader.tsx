import { Link } from "react-router-dom"

const QuizHeader = ({ image, title }: { image: string; title: string }) => {
  return (
    <header className="flex items-center justify-start gap-10 px-20 pt-7">
      <img src={image} alt="" />
      <h1 className="text-3xl font-extrabold text-[#0B539B]">{title}</h1>
      <Link to={"/."} className="border-nonde outline-nonde ml-auto h-[54px] w-[238px] content-center rounded-[20px] bg-[#528FCC] text-center text-[20px] font-bold text-white">
        Back to Learn
      </Link>
    </header>
  )
}

export default QuizHeader
