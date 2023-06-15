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
      easing: "ease-in ease-out",
      delay: 100,
    });
  }, []);

  return (
    <section className="relative flex-col main mt-[20px] justify-center items-center bg-[#FFFFFF] min-h-[230px] capitalize">
      <h2
        data-aos="fade-right"
        className="text-[#000000] text-center font-bold mb-2 mt-10 px-1 unbounded"
      >
        You can get them all for free now!
      </h2>
      <img
        src={sqleft}
        className="hidden md:block absolute w-[4%] top-18 -left-2"
        alt="svg_icon"
      />

      <div className="mx-auto md:mt-2">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly card mx-auto">
          <Card
            title="comfortably"
            icon={<MdChair className="text-2xl" />}
            animation="fade-up"
            text="at any location and any moment without requiring a lengthy stroll to locate it ."
          ></Card>
          <Card
            title="easily"
            icon={<MdSwapHorizontalCircle className="text-2xl" />}
            animation="fade-up"
            text="with a few simple taps and swift downloads, you can access it instantly."
          ></Card>
          <Card
            title="reliable"
            icon={<FaHandHoldingHeart className="text-2xl" />}
            animation="fade-up"
            text="ones that you can rely no doubting its authenticity. Isn't that cool !"
          ></Card>
          <img
            src={sqleft}
            className="block md:hidden absolute w-[28%] top-[21%] -left-[2.75rem]"
            alt="svg_icon"
          />
          <img
            src={conleft}
            className="absolute top-[32%] -right-[2.75rem] w-[30%] md:hidden"
            alt="svg_icon"
          />
        </div>
      </div>
    </section>
  );
};
