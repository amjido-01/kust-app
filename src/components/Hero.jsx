import React from "react";
import { Button } from "./Button";
import heroImg from "../assets/bro.png";
// import Rec from "../assets/Rectangle.png";
import mobilehero from "../assets/mobilehero.png";
import Testing from "../assets/Ellipse.svg";
import Typed from "typed.js";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["It has been solved!", "It made easier!"],
      typeSpeed: 100,
      loop: true,
    };
    const typed = new Typed("#target", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-[#212327] relative min-h-[540px] py-16 md:py-20 px-8 md:px-4">
      <div className="container flex items-center justify-center flex-col-reverse md:mt-20 md:flex-row mx-auto md:w-[75%]">
        <img
          className="absolute md:hidden top-20 right-4 mobile"
          src={mobilehero}
          alt="mobilehero"
        />
        <div className="md:w-[65%] text-[#FFFFFF] mt-1 capitalize">
          <span
            id="target"
            className="italic text-[#0F9D58] Poppins text-[18px] font-normal md:font-semibold"
          ></span>

          <div className="mt-2 w-[70%] md:w-full border-2">
            <p
              className="font-bold text-2xl sm:text-3xl md:text-[48px] "
              style={{ lineHeight: "58px" }}
            >
              all your handout and past question are now in one place.
            </p>
            <p className="mt-2 font-medium text-[22px] sm:text-xl md:text-xl">
              free website for KUST students to download their favorites handout
              and past question papers.
            </p>
          </div>

          <div className="mt-8 border-2 block">
            <Button
              value="get started"
              cls_name="text-white block cursor bg-[#4285F4] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
            ></Button>
          </div>
        </div>

        <div className="hidden z-10 ml-20 md:flex justify-center w-[70%] md:w-[65%] mb-4 bg-transparent">
          <img src={heroImg} className="" alt="hero_icon" />
        </div>
      </div>

      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
