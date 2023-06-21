import React from "react";
import Webiner from "../assets/Webinar.png"
import secondconleft from "../assets/secondconleft.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const ThirdSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="bg-[#111] test min-h-[200px] relative md:pb-10 pb-[3.5rem] px-8 md:px-5">
      <div className="mx-auto flex third_section flex-col md:flex-row-reverse items-center justify-between">
        <img
          src={secondconleft}
          className="absolute w-[40%] top-10 md:top-10 md:w-[16%] left-1 md:left-10"
          alt="svg_icon"
        />

        <div
          data-aos="fade-left"
          className="flex items-center justify-end pr-5"
        >
          <img
            src={Webiner}
            className="object-cover webner md:mr-14 w-[95%]"
            alt="section_img"
          />
        </div>

        <div
          data-aos="fade-right"
          className="text-[#D9D9D9] third_containt text-right md:text-end pb-10"
        >
          <h1 className="font-bold text-[16px] leading-[32px] unbounded py-4">
            Technology advancement
          </h1>
          <p className="md:w-[70%]">
          Technology advances and eases our lives daily. We strive to follow its dynamic changes and innovations that offer us new possibilities and solutions.
          </p>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1678378618">
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
