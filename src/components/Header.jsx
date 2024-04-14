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

  const headerNavigations = [
    {
      id: 0,
      children: "Home",
      url: "/"
    },
    
    {
      id: 1,
      children: "Documents",
      url: "/documents"
    },
    {
      id: 2,
      children: "About",
      url: "/about"
    },
    {
      id: 0,
      children: "Study",
      url: "/study"
    }
  ]
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
    <nav className="bg-[#111] font-bold justify px-6 sm:px-4 py-4 md:py-4 fixed w-full z-20 top-0 left-0">
      <div className="py-2 md:py-1 header flex flex-wrap justify-between items-center mx-auto">
        <div>
          <NavLink to="/" className="flex items-center">
            <span className="self-center text-[18px] md:text-2xl whitespace-nowrap text-white">
              KUST<span className="text-[#0F9D58]">Booklets</span>
            </span>
          </NavLink>
        </div>

        {/* desktop */}
        <div className="hidden lg:block items-center justify-between md:w-auto">
          <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 font-[12px] md:text-[15px] md:font-medium">
            
          {headerNavigations.map((navItem) => (
              <li
                key={navItem.id}
                className="block py-2 pl-3 pr-4 under text-white rounded capitalize md:bg-transparent md:p-0 font-medium"
              >
                <NavLink
                  to={navItem.url}
                  activeClassName="active"
                  className="nav-link"
                  style={navLinkStyle}
                >
                  {navItem.children}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex cursor-pointer">
          <Button
            onSmash={() => navigate("/support-us")}
            value="support us"
            cls_name="text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
          ></Button>
        </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </nav>
  );
};
