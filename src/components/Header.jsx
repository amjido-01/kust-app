import React from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

export const Header = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
    <nav className="bg-[#212327] font-bold justify px-6 sm:px-4 py-4 md:py-0 fixed w-full z-20 top-0 left-0">
      <div className="container w-[98%] py-2 md:py-1 md:w-[75%] flex flex-wrap justify-between items-center mx-auto">
        <div>
          <NavLink to="/" className="flex items-center">
            <span className="self-center text-[18px] md:text-2xl whitespace-nowrap text-white">
              KUST<span className="text-[#0F9D58]">Booklets</span>
            </span>
          </NavLink>
        </div>

        {/* desktop */}
        <div className="hidden md:block items-center justify-between md:w-auto">
          <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 font-[12px] md:text-[15px] md:font-medium">
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
              <NavLink style={navLinkStyle} to="/study">
                Study
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
            value="support us"
            cls_name="text-white bg-[#0F9D58] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-sm px-3 md:px-5 py-2 text-center capitalize"
          ></Button>
        </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </nav>
  );
};
