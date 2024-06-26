import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Fifth = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);
  return (
    <section className="min-h-[250px] pt-8 border-t border-gray-500 md:mt-[1.5rem] ">
      <div className="container text-[#000000] flex justify-center items-center md:mt-4 md:mb-10  mx-auto capitalize">
        <div className="w-[80%] md:px-0 font-medium px-4 md:w-1/2 text-center">
          <h2
            data-aos="fade-up"
            className="my-4 capitalize font-bold px-1 text-[16px] md:text-[32px] leading-[20px] md:leading-[40px] unbounded"
          >
            our emphasis on education
          </h2>
          <p data-aos="fade-up" className=" md:text-xl mb-12 font-medium text-justify">
            education is a valuable asset, and we believe whoever you help get
            knowledge you give him the greatest gift in life. that is why we
            decide to have your back on this journey, to make it simple for you
            when it comes to finding reading material in KUST campus.
          </p>
        </div>
      </div>
    </section>
  );
};
