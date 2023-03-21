import React from "react";
import { Card } from "./Card";
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

export const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="relative flex-col justify-center items-center bg-[#FFFFFF] min-h-[250px] capitalize">
      <h1
        data-aos="fade-right"
        className="text-[#000000] text-center font-bold my-8 px-1 text-[24px]"
      >
        you can get them all for free now!
      </h1>
      <img
        src={sqleft}
        className="hidden md:block absolute w-[4%] top-18 -left-2"
        alt="svg_icon"
      />

      <div className="container mx-auto md:w-[70%]">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly card mx-auto">
          <Card
            title="comfortably"
            icon={<MdChair />}
            animation="fade-up"
          ></Card>
          <Card
            title="easily"
            icon={<MdSwapHorizontalCircle />}
            animation="fade-left"
          ></Card>
          <Card
            title="reliable"
            icon={<FaHandHoldingHeart />}
            animation="fade-right"
          ></Card>
          <img
            src={sqleft}
            className="block md:hidden absolute w-[15%] top-[48%] -left-5"
            alt="svg_icon"
          />
          <img
            src={conleft}
            className="absolute top-[32%] right-0 w-[25%] md:hidden"
            alt="svg_icon"
          />
        </div>
      </div>
    </section>
  );
};
