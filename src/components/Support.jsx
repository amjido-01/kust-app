import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Button } from "./Button";

export const Support = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container w-[90%] p-4  md:p-0 md:w-[75%] md:mb-20 mx-auto mt-[5rem] md:mt-[8rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="capitalize text-start font-semibold text-[1.4rem] md:text-[32px] leading-[32px] mb-2  md:leading-[49px]"
            >
              Great future are not built alone, but with the help of individuals
              like you !
            </h1>
            <p className="capitalize pb-2 font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              ready to do something incredible
            </p>
            <hr />
          </div>
        </div>

        <div className="container h-[30rem] md:flex md:items-center">
          <div className="md:w-[45%]">
            <h3 className="md:text-[1.5rem] text-[1.2rem] mt-4 font-bold ">Contribute</h3>
            <p className="text-justify pt">
              By contributing with a single handout or past examination
              question, you have the potential to assist thousands of students
              at this university. Contributions can be made in the form of
              pictures or PDF files. If you choose to contribute a picture,
              please ensure that it is taken with utmost clarity so that no
              details are missed.
            </p>
            <Button value="Contribute" cls_name="text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize" />
          </div>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
