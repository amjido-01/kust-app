import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Card = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <div
        data-aos={props.animation}
        className="flex max-w-md overflow-hidden py-3 px-10 md:px-3 my-3 text-center"
      >
        <div className="">
          <div className="flex items-center justify-center">
            {props.icon}
            <h1 className="font-bold text-[16px] md:text-[24px] md:leading-[36px] leading-[24px] px-4">{props.title}</h1>
          </div>
          <p className=" font-normal text-[15px] leading-[24px] md:text-[16px] md:leading-[22px] pr-5">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
