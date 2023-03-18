import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <section>
      <Header />
      <div className="container md:w-[65%] mx-auto border-2 mt-32 flex items-center justify-center">
        <div className="text-center w-1/2  border-2">
          <h2 className="text-[#1F1F1F] font-bold text-[18px] leading-8">
            We are a team of two programmers and designers{" "}
          </h2>
          <p>
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>

      <div></div>
      <Footer className="absolute w-full bottom-0" />
    </section>
  );
};
