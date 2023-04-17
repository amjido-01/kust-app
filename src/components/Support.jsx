import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Support = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="border-2 border-red-600 container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[10rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] border-2 border-red-600 mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              Great futures are not built alone, but <br /> with the help of
              individuals like you !
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              ready to do something incredible
            </p>
          </div>
        </div>


      <div className="container border-2 mt-[50%] md:mt-[20%] border-blue-600">
        <h1 style={{fontFamily: 'Poppins'}} className="text-[32px] uppercase text-center font-medium leading-[48px]">under construction !</h1>
      </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>

    </section>
  );
};
