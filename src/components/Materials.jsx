import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Docs } from "./Docs";
export const Materials = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[7rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
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

          <h4 className=" bg-[#0F9D58] w-[15rem] text-[#FFFFFF] rounded border-2 border-[#000000] p-[5px]">first semester</h4>
          <div className="container mx-auto">
            <div className="container">

              <div className="block md:flex md:justify-between uppercase">
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
