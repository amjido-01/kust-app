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
        <div className="card_contents">
          <div className="flex items-center justify-center">
            {props.icon}
            <h3 className="px-4">{props.title}</h3>
          </div>
          <p className="pr-5">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
