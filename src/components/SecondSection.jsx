import React from "react";
import SecondHeroImg from "../assets/main.png";
import comfetti from "../assets/conright.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import { useEffect } from "react";

export const SecondSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="bg-[#212327] md:border-b-[1.5px] border-gray-700 relative min-h-[400px] py-16 md:py-2 px-8 md:px-4 md:pt-24">
      <div className="container md:w-[65%] mx-auto flex flex-col md:flex-row items-center justify-center capitalize">
        <img
          src={comfetti}
          className="absolute w-[15%] md:w-[7%] top-20 md:top-40 right-10 md:right-32"
          alt="section_svg"
        />

        <div
          data-aos="fade-right"
          className="text-white md:w-1/2 mt-10 md:mt-5 mb-5 md:ml-10 pl-4"
        >
          <img
            src={SecondHeroImg}
            className="object-cover w-1/2 md:w-[85%]"
            alt="section_img"
          />
        </div>

        <div
          data-aos="fade-left"
          className="text-[#D9D9D9] md:w-1/2 text-start w-[95%] ml-6"
        >
          <h1 className="font-bold text-[18px] leading-[10px] py-4">
            our struggle
          </h1>
          <p>
            Our aim is to alleviate the challenges that students encounter when
            searching for reliable handouts or past question papers for their
            relevant courses. For this reason, we have developed this platform
            for your convenience.
          </p>
        </div>
      </div>

      <div className="curvetwo">
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
