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

      <div className="container w-full p-4  md:p-0 md:w-[73%] md:mb-20 mx-auto mt-[5rem] md:mt-[8rem] flex-1">
        <div className="look flex flex-col border-2 justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase text-start my-2 font-semibold text-[17px] md:text-[32px] leading-[24px] md:leading-[49px]"
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

        <div className="container border-2 border-red-500">
          <div>
            <h3>contribute</h3>
            <p>
              By contributing with a single handout or past examination
              question, you have the potential to assist thousands of students
              at this university. Contributions can be made in the form of
              pictures or PDF files. If you choose to contribute a picture,
              please ensure that it is taken with utmost clarity so that no
              details are missed.
            </p>
            <Button />
          </div>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
