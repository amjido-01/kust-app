import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Docs } from "./Docs";
export const Materials = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-full border-2 border-green-600 p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[7rem] flex-1">
        <div className="look flex border-2 border-red-400 flex-col justify-center">
          <div className="text-[#000000] border-2 border-green-600 mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to the download page
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              Please select either the handout or the past question. Then,{" "}
              <br /> click on the download button to receive it on your device.
            </p>
          </div>

          <h4>first semester</h4>
          <div className="container border-[3px] border-[#000000] mx-auto">
            <div className="container border-2 border-green-500">

              <div className="block md:flex md:justify-between border-2 border-orange-500 uppercase">
                <Docs title="handouts" background="#8CB6B5"/>
                <Docs title="past question" background="#D4ADB7"/>
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
