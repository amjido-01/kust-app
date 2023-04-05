import React from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  
  // active page indicator
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textDecorationColor: isActive ? "#0F9D58" : "none",
      textDecorationThickness: isActive ? "2px" : "0px",
      textUnderlineOffset: isActive ? "0.3em" : "none",
      color: isActive ? "#0F9D58" : "",
    };
  };
  return (
    <nav className="bg-[#212327] font-bold justify px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0">
      <div className="container w-[75%] flex flex-wrap items-center justify-between mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl whitespace-nowrap dark:text-white">
              KUST<span className="text-[#0F9D58]">Booklets</span>
            </span>
          </a>
        </div>

        {/* desktop */}
        <div className="hidden md:block items-center justify-between  md:w-auto">
          <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-[18px] md:font-medium ">
            <li
              className="block py-2 pl-3 pr-4 under text-white rounded capitalize md:bg-transparent md:p-0 font-medium"
              aria-current="page"
            >
              <NavLink style={navLinkStyle} to="/">
                Home
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-4 under text-white rounded capitalize md:p-0 font-medium">
              <NavLink style={navLinkStyle} to="/documents">
                Documents
              </NavLink>
            </li>
            <li className="block py-2 pl-3 pr-4 under text-white rounded capitalize md:p-0 font-medium">
              <NavLink style={navLinkStyle} to="/about">
                about us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex cursor-pointer">
          <Button
            onSmash={() => navigate("/support-us")}
            isHovered={isHovered}
            onHover={() => setIsHovered(true)}
            onLeave={() => setIsHovered(false)}
            value="support us"
            border="1px solid"
          ></Button>
        </div>
      </div>
    </nav>
  );
};
