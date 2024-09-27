import { Link } from "react-router-dom"
import emailIcon from "@/assets/global/email.svg"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="mb-5 mt-20 flex w-full flex-col items-start gap-[40px] rounded-[197px] bg-[#FFFFE4] px-[120px] py-[30px] sm:pl-52 md:relative md:flex-row md:justify-evenly md:px-10">
      <div className="flex flex-col items-center gap-[10px]">
        <Logo />
        <p className="text-nowrap text-[13px] text-[#0B539B]">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col items-start gap-[11px] text-nowrap">
        <h4 className="text-[15px] font-medium text-[#0B539B]">Navigation</h4>
        <Link
          to={"/"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Home
        </Link>
        <Link
          to={"/discover"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Discover
        </Link>
        <Link
          to={"/learn"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Learn
        </Link>
        <Link
          to={"/play"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Play
        </Link>
      </div>
      <div className="flex flex-col items-start gap-[11px] text-nowrap">
        <h4 className="text-[15px] font-medium text-[#0B539B]">LEGAL</h4>
        <Link
          to={"/about"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          About us
        </Link>
        <Link
          to={"/privacy"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Privacy Policy
        </Link>
        <Link
          to={"/service"}
          className="text-[13px] text-[#528FCC] hover:text-[#0B539B]"
        >
          Terms of Service
        </Link>
      </div>
      <div className="flex flex-col items-start gap-[11px]">
        <h4 className="text-[15px] font-medium text-[#0B539B]">Talk to us</h4>
        <a
          href="mailto:someone@example.com"
          className="flex gap-1 text-[13px] text-[#528FCC]"
        >
          <img src={emailIcon} alt="" className="size-[20px]" />{" "}
          green_team@gmail.com
        </a>
      </div>
      <p className="bottom-0 left-[50%] translate-x-[-50%] text-nowrap text-[13px] text-[#AEAEAE] max-md:pl-32 md:absolute">
        © 2024, All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
