import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export const Support = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
     className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container text-center w-full p-4 md:p-0 md:w-[73%] md:mb-20 mx-auto mt-[5rem] md:mt-[8rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[17px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              Great futures are not built alone, but with the help of
              individuals like you !
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              ready to do something incredible
            </p>
          </div>
        </div>

        <div className="container mt-[20%] md:mt-[8%]">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-[30px] uppercase font-medium leading-[48px]"
          >
            under construction !
          </h1>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
