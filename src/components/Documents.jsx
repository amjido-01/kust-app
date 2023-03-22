import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";
import { Faculties } from "./Faculties";

export const Documents = () => {
  return (
    <section className="relative">
      <Header />

      <div className="container w-[90%] md:w-[70%] border-2 border-red-500 mx-auto mt-[7rem]">
        <div className="">
          <h1 className="text-[#1F1F1F] font-semibold md:font-bold text-[18px] md:text-[19px] leading-6">
            welcome to the document page
          </h1>
          <p className=" font-medium md:font-semibold text-[13px] md:text-[14px] mt-2">
            choose your faculty and click/tap to proceed.
          </p>
        </div>
      </div>
      <img
        src={one}
        className="absolute top-[45%] md:top-16 w-[23px] md:w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={two}
        className="absolute -bottom-[12%] left-10 md:left-[30%] w-[25px] md:w-[60px]"
        alt=""
        srcset=""
      />
      <img
        src={three}
        className="absolute top-[60%] w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={four}
        className="absolute right-0 w-[20px] md:right-0 md:top-0 md:w-[20px]"
        alt=""
        srcset=""
      />
      <img
        src={five}
        className="absolute right-[25%] md:top-[10%] top-[15%] w-[24px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={six}
        className="absolute right-0 top-[70%] w-[30px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={seven}
        className="absolute right-0  md:left-[45%] top-[40%] w-[25px] md:w-[35px]"
        alt=""
        srcset=""
      />
      <div className="container md:w-[70%] mx-auto my-10">
        <div className="container">
          <Faculties></Faculties>
        </div>
      </div>

      <Footer className="absolute w-full" />
    </section>
  );
};
