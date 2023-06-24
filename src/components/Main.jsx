import React from "react";
// import { Card } from "./Card";
import { MdChair } from "react-icons/md";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import { useEffect } from "react";
import sqleft from "../assets/sqleft.svg";
import conleft from "../assets/conleft.svg";
import comfort from "../assets/Desktop/comfort.png";
import reliable from "../assets/Desktop/reliable.png";
import easy from "../assets/Desktop/easy.png";
// import comfort-m from "../assets/Mobile/comfort-m.png";
// import easy-m from "../assets/Mobile/easy-m.png";
// import reliable-m from "../assets/Mobile/reliable-m.png";

export const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in ease-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="relative flex-col main mt-[20px] justify-center items-center bg-[#FFFFFF] min-h-[300px] capitalize">
      <h2
        data-aos="fade-right"
        className="text-[#000000] md:text-[36px] text-center font-bold md:mb-2 md:mt-20 px-1 unbounded"
      >
        You can get them all for free now!
      </h2>
      <img
        src={sqleft}
        className="hidden md:block absolute w-[10%] top-18 -left-"
        alt="svg_icon"
      />

      <div className="mx-auto md:mt-2 md:mb-24">
        <div className="flex flex-col md:flex-row md:w-[70%] w-[60%] mt-[2rem] md:justify-evenly justify-center  items-center  mx-auto">
          <img src={comfort} className="Cards" data-aos="fade-up" alt="Comfortability Card" />
          <img src={reliable} className="Cards" data-aos="fade-up" alt="Reliability Card" />
          <img src={easy} className="Cards" data-aos="fade-up" alt="Easily Card" />
          <img
            src={sqleft}
            className="block md:hidden absolute w-[28%] top-[21%] -left-[2.75rem]"
            alt="svg_icon"
          />
          <img
            src={conleft}
            className="absolute top-[20%] -right-[2.75rem] w-[30%] md:block md:w-[15%]"
            alt="svg_icon"
          />
        </div>
      </div>
    </section>
  );
};
