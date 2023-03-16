import React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  // const [active, setActive] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textDecorationColor: isActive ? "#0F9D58" : "none",
      textDecorationThickness: isActive ? "2px" : "0px",
    };
  };
  return (
    <nav className="bg-[#212327] font-bold px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between md:justify-evenly mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <span className="self-center text-lg whitespace-nowrap dark:text-white">
              KUST<span className="text-[#0F9D58]">Booklets</span>
            </span>
          </a>
        </div>

        {/* desktop */}
        <div className="hidden md:block items-center justify-between w-full md:w-auto">
          <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li
              className="block py-2 pl-3 pr-4 text-white rounded capitalize md:bg-transparent md:p-0 font-medium"
              aria-current="page"
            >
              <NavLink style={navLinkStyle} to="/">
                Home
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-4 text-white rounded capitalize md:p-0 font-medium">
              <NavLink style={navLinkStyle} to="/documents">
                Documents
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-4 text-white rounded capitalize md:p-0 font-medium">
              <NavLink style={navLinkStyle} to="/about">about us</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Button value="support us" border="1px solid"></Button>
        </div>
      </div>
    </nav>
  );
};
