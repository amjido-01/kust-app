import React from "react";
import { Button } from "./Button";
import heroImg from "../assets/latest.png";
import Typed from "typed.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      strings: [
        "Introducing the Game-Changer",
        "Empowering you with simple tech solution",
        "Effortles searching at Your Fingertips",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };
    const typed = new Typed("#target", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-[#111] relative w-full  hero_parent py-16 md:py-8 px-[1.8rem] md:px-4">
      <div className=" hero items-center justify-center flex-col-reverse md:flex-row mx-auto ">
        <div className="intro_container md:ml-10 text-[#FFFFFF] md:mt-[8rem] mt-1 capitalize">
          <span
            id="target"
            className="italic text-[#FFFFFF] Poppins text-[13px] font-normal md:font-semibold"
          ></span>

          <div className="mt-2 titles">
            <p className="font-bold intro">
              all your reading materials are now in one place.
            </p>
            <p className="mt-3.5 font-medium sub_intro">
              Access handouts, past exams questions, and study tips all at your
              finger tip.
            </p>
          </div>

          <div className="md:mt-8 mt-12 flex absolute z-10 btns justify-between cursor-pointer">
            <Button
              onSmash={() => navigate("/documents")}
              value="Download Here"
              cls_name="text-white rounded-[4px] z-10 flex border-2 hover:bg-[#0F9D58] border-[#0F9D58] cursor bg-[#0F9D58] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
            ></Button>

            <Button
              onSmash={() => navigate("/study")}
              value="Study"
              cls_name="text-white z-10 flex rounded-[4px] hover:bg-transparent cursor bg start border-[2px] border-[#0F9D58] flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
            ></Button>
          </div>
        </div>

        <div className="hidden z-10 md:flex justify-center absolute right-[5rem] w-[70%] hero_img mb-4 md:mb-0 bg-transparent">
          <img src={heroImg} className="" alt="hero_icon" />
        </div>
      </div>
      <div></div>

      {/* <div className="curve">
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
      </div> */}
    </section>
  );
};
