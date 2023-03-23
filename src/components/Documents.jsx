import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Documents = () => {
  return (
    <section className="relative">
      <Header />
      <div className="container w-[90%] md:w-[50%] mx-auto mt-[7rem] flex items-center justify-center">
        <div className="text-center md:w-[70%]">
          <h1 className="text-[#1F1F1F] font-semibold md:font-bold text-[18px] md:text-[19px] leading-6">
            We are a team of two programmers and designers{" "}
          </h1>
          <p className=" font-medium md:font-semibold text-[13px] md:text-[14px] mt-2">
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>

      <div className="container w-[90%] md:w-[70%] border border-red-500 mx-auto my-10">
        <div className="container">
          
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="absolute w-full" />
      </div>
    </section>
  );
};
