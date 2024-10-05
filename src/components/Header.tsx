import React from "react"
import { Link, NavLink } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logout } from "@/feature/auth/authSlice"
import Logo from "./Logo"

import menuLogo from "@/assets/global/menu.svg"
import homeIcon from "@/assets/header/home.svg"
import findIcon from "@/assets/header/find.svg"
import learnIcon from "@/assets/header/learn.svg"
import playIcon from "@/assets/header/play.svg"
import loginIcon from "@/assets/header/login.svg"
import signupIcon from "@/assets/header/signup.svg"
import scenariosIcon from "@/assets/header/scenarios.svg"
import logoutIcon from "@/assets/header/logout.svg"
import userIcon from "@/assets/header/user.svg"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  return (
    <header className="m-5 flex h-[75px] items-center justify-between rounded-[50px] py-5 md:mx-10 md:mb-10">
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={menuLogo} alt="nav links" className="border-0 outline-0 *:border-none *:outline-none" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bluehover flex w-[250px] flex-col gap-5 py-5 font-semibold *:flex *:gap-3 *:px-3">
            {auth.token && (
              <div className="flex items-center gap-5">
                <img src={userIcon} alt="" className="size-[50px] fill-blue-800" />
                <p className="*:block">
                  <span className="font-bold text-blue-500">{auth.firstName}</span>
                  <span className="text-xs text-blue-700">{auth.email}</span>
                </p>
              </div>
            )}
            <Link to={"/"} className="p-1 hover:bg-blue-100">
              <img src={homeIcon} alt="" className="size-[25px]" /> Home
            </Link>
            <Link to={"/learn"} className="p-1 hover:bg-blue-100">
              <img src={learnIcon} alt="" className="size-[25px]" />
              Learn
            </Link>
            <Link to={"/discover"} className="p-1 hover:bg-blue-100">
              <img src={findIcon} alt="" className="size-[25px]" />
              Discover
            </Link>
            <Link to={"/play"} className="p-1 hover:bg-blue-100">
              <img src={playIcon} alt="" className="size-[25px]" />
              Play
            </Link>
            <Link to={"/scenarios"} className="p-1 hover:bg-blue-100">
              <img src={scenariosIcon} alt="" className="size-[25px]" />
              Scenarios
            </Link>
            {!auth.token && (
              <>
                <Link to={"/login"} className="p-1 hover:bg-blue-100">
                  <img src={loginIcon} alt="" className="size-[25px]" /> Login
                </Link>
                <Link to={"/signup"} className="p-1 hover:bg-blue-100">
                  <img src={signupIcon} alt="" className="size-[25px]" /> Sign up
                </Link>
              </>
            )}
            {auth.token && (
              <button onClick={() => dispatch(logout())} className="flex items-center gap-5 hover:bg-red-50">
                <img src={logoutIcon} alt="" className="size-[30px]" />
                <p className="font-bold text-red-700">Log Out</p>
              </button>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Logo />
      <nav className="hidden gap-3 text-[18px] font-bold text-[#0B539B] md:flex md:gap-4 lg:gap-10 lg:text-[20px]">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}>
          Home
        </NavLink>
        <NavLink to="/learn" className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}>
          Learn
        </NavLink>
        <NavLink to="/discover" className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}>
          Discover
        </NavLink>
        <NavLink to={"/play"} className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}>
          Play
        </NavLink>
        <NavLink to={"/scenarios"} className={({ isActive }) => (isActive ? "text-[#86A41E]" : "")}>
          Scenarios
        </NavLink>
      </nav>
      {auth.token ? (
        <>
          <div className="group relative hidden items-center gap-1 md:flex">
            <img src={userIcon} alt="" className="size-[50px] fill-blue-800" />
            <p className="*:block">
              <span className="font-bold text-blue-500">{auth.firstName}</span>
              <span className="text-xs text-blue-700">{auth.email}</span>
            </p>
            <button
              onClick={() => dispatch(logout())}
              className="absolute -bottom-8 left-[50%] hidden translate-x-[-50%] items-center justify-center gap-4 text-nowrap rounded-[8px] px-10 py-1 hover:bg-red-50 group-hover:flex"
            >
              <img src={logoutIcon} alt="" className="size-[30px]" />
              <p className="font-bold text-red-700">Log Out</p>
            </button>
          </div>
        </>
      ) : (
        <div className="hidden items-center md:flex lg:text-[20px]">
          <Link to={"/login"} className="font-bold text-[#0B539B]">
            Login
          </Link>
          <Link to={"/signup"} className="ml-3 content-center text-nowrap rounded-[20px] bg-[#528FCC] text-center font-bold text-white max-lg:px-2 max-lg:py-1 lg:h-[48px] lg:w-[132px]">
            Sign up
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
