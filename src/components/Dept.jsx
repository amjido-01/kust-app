import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

export const Dept = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[7rem] flex-1">
        <div className="lookflex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to the department page
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              choose between department and select your level <br /> then, to
              proceed click/tap on the screen.
            </p>
          </div>

          <div className="container border-[3px] border-[#000000] rounded-[30px] bg-[#F1E2B9] mx-auto">
            <div className="container">
              <h2
                style={{ fontFamily: "poppins" }}
                className="px-8 pt-4 uppercase text-[17px] font-semibold leading-[26px] md:text-[26px] md:pt-5 md:font-medium"
              >
                FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
              </h2>

              <div className="flex justify-between uppercase my-4 pb-[20px] pt-1 pl-6 md:px-8">
                <div className="">
                  <h3>computer science</h3>

                  <ul className=" list-disc mt-4">
                    <li>Level one</li>
                    <li>level two</li>
                    <li>level three</li>
                    <li>level four</li>
                  </ul>
                </div>

                <div>
                  <h3>mathematics</h3>

                  <ul className=" list-disc mt-4">
                    <li>Level one</li>
                    <li>level two</li>
                    <li>level three</li>
                    <li>level four</li>
                  </ul>
                </div>

                <div>
                  <h3>statistics</h3>

                  <ul className=" list-disc mt-4">
                    <li>Level one</li>
                    <li>level two</li>
                    <li>level three</li>
                    <li>level four</li>
                  </ul>
                </div>

                <div>
                  <h3>information technology</h3>

                  <ul className=" list-disc mt-4">
                    <li>Level one</li>
                    <li>level two</li>
                    <li>level three</li>
                    <li>level four</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </section>
  );
};
