import React from "react"
import { Link, NavLink } from "react-router-dom"
import menuLogo from "/src/assets/global/menu.svg"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Logo from "./Logo"
import { useAppSelector } from "@/store/hooks"

const Header: React.FC = () => {
  const auth = useAppSelector((state) => state.auth)
  return (
    <header className="m-5 flex h-[75px] items-center justify-between rounded-[50px] py-5 md:mx-10 md:mb-10">
      <Logo />
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={menuLogo}
              alt="nav links"
              className="border-none outline-none"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NavLink to={"/"}>Home</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={"/learn"}>Learn</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={"/discover"}>Discover</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={"/play"}>Play</NavLink>
            </DropdownMenuItem>
            {auth.token ? (
              <div className="place-self-center text-[20px] text-[#0B539B]">
                {auth.firstName}
              </div>
            ) : (
              <div className="itmes-center flex w-full flex-col justify-center">
                <Link
                  to={"/login"}
                  className="text-[20px] font-bold text-[#0B539B]"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="text-[20px] font-bold text-[#0B539B]"
                >
                  Sign up
                </Link>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="hidden gap-3 text-[18px] font-bold text-[#0B539B] sm:flex md:gap-4 lg:gap-10 lg:text-[20px]">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/learn"
          className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}
        >
          Learn
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}
        >
          Discover
        </NavLink>
        <NavLink
          to={"/play"}
          className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}
        >
          Play
        </NavLink>
      </nav>
      {auth.token ? (
        <div className="hidden text-[20px] sm:flex">{auth.firstName}</div>
      ) : (
        <div className="hidden items-center sm:flex lg:text-[20px]">
          <Link to={"/login"} className="font-bold text-[#0B539B]">
            Login
          </Link>
          <Link
            to={"/signup"}
            className="ml-3 content-center text-nowrap rounded-[20px] bg-[#528FCC] text-center font-bold text-white max-lg:px-2 max-lg:py-1 lg:h-[48px] lg:w-[132px]"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
