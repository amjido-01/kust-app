import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import support from "../assets/support.png";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Sixth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);
  return (
    <section className="linear relative px-8 md:px-4">
      <div className="container flex items-center justify-center flex-col-reverse md:flex-row mx-auto min-h-[100px] md:w-[70%] mt-2">
     
        <div
          data-aos="fade-right"
          className="md:w-[50%] md:mr-20 md:mt-20 text-[#000000] capitalize"
        >
          <div className="mt-20 md:mt-2 w-full md:w-full font-medium ">
            <p className="text-[16px] pt-4 md:pt-0 leading-[24px]">
              We have devoted a lot of time and effort to collect and organize
              these materials for you, in order to spare you some hassle,
              expense and time. If you appreciate our work, please give us a
              thumbs up and
            </p>
          </div>

          <div className="mt-4">
            <Button
              onSmash={() => navigate("/support-us")}
              value="Support Us"
              cls_name="text-white bg-[#0F9D58] rounded-[4px] flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
            ></Button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="hidden md:mt-20 z-10 md:flex justify-center w-[70%] md:w-[40%]"
        >
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
