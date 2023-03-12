import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import support from "../assets/support.png";
import mobilesupport from "../assets/mobilesupport.png";
import { Button } from "./Button";

export const Sixth = () => {
  return (
    <section className="linear relative min-h-[100px] border border-red-600  px-8 md:px-4">
      <div className="container border-4 border-blue-600 flex items-center justify-center flex-col-reverse md:flex-row mx-auto md:w-[70%] mt-2">
        <img
          className="absolute md:hidden top-20 right-4 mobile"
          src={mobilesupport}
          alt="mobilehero"
        />
        <div className="md:w-[65%] text-[#000000] md:mt-[20%] capitalize">
          <div className="mt-2 w-[70%] md:w-full">
            <p className="">
              We have devoted a lot of time and effort to collect and organize
              these materials for you, in order to spare you some hassle,
              expense and time. If you appreciate our work, please give us a
              thumbs up and
            </p>
          </div>

          <div className="mt-8">
            <Button value="get started" color="#4285F4" border="none"></Button>
          </div>
        </div>

        <div className="hidden z-10 md:flex justify-center w-[70%] md:w-[54%]">
          <img src={support} className="" alt="hero_icon" />
        </div>
      </div>

      <div className="custom-shape-divider-top-1678566261">
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
