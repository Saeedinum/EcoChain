import Logo from "@/components/Logo"
import { Link } from "react-router-dom"

const Header = ({ type }: { type: "signup" | "login" }) => {
  const [suggest, redirect] =
    type === "login"
      ? ["Don’t have account ?", "Sign up"]
      : ["Alread have account?", "Log in"]
  return (
    <header className="px-5 pt-5 sm:px-28">
      <nav className="flex items-center justify-between">
        <Logo />
        <p className="flex-col items-center font-medium text-black max-sm:flex max-sm:text-sm">
          {suggest}
          <Link
            to={`${type === "signup" ? "/login" : "/signup"}`}
            className="font-bold text-[#0B539B]"
          >
            {" "}
            {redirect}
          </Link>
        </p>
      </nav>
    </header>
  )
}

export default Header
