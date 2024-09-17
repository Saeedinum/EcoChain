import React from "react";
import { NavLink } from "react-router-dom";

import earthLogo from "/src/assets/global/earth.svg";
import searchLogo from "/src/assets/global/search.svg";
import menuLogo from "/src/assets/global/menu.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  return (
    <header className="m-5 flex h-[75px] items-center justify-between rounded-[50px] p-5 md:mx-20 md:my-10 md:bg-[#FFFFE4] md:drop-shadow-lg">
      <div className="flex items-center gap-2">
        <img src={earthLogo} alt="logo " className="" />
        <h1 className="bg-gradient-to-b from-[#528FCC] to-[#86A41E] bg-clip-text text-2xl font-bold text-transparent">
          green
        </h1>
      </div>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="hidden gap-10 text-[20px] font-bold text-[#0B539B] sm:flex">
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
      <span className="hidden h-[41px] w-[245px] items-center gap-4 rounded-[30px] border-none bg-[#E4F6FF] p-1 px-5 text-[#0B539B] lg:flex">
        <img src={searchLogo} alt="" className="size-[18px]" />
        <input
          type="text"
          placeholder="search"
          className="h-full bg-transparent outline-0 placeholder:text-[#0B539B]"
        />
      </span>
    </header>
  );
};

export default Header;
