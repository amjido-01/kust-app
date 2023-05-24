import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Study = () => {
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
              Want To study ahead?<br />Got you covered!
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              happy learning!
            </p>
          </div>
        </div>

        <div className="container mt-[20%] md:mt-[8%]">
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" uppercase font-medium "
          >
            <ul className="block md:flex justify-around">
                <li className="text-[20px] my-4 md:my-0">
                <p className="text-[18px]">Build Your Vocabulary Everyday</p>
                    <Link className="text-white w-[8rem] mx-auto my-2 cursor bg-[#4285F4] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize" to="/dictionary">Dictionary</Link>
                </li>
                <li className="text-[20px]">
                    <p className="text-[18px]">Get Books Recommendation for All Courses!</p>
                    <Link className="text-white w-[8rem] mx-auto my-2 cursor bg-[#4285F4] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize" to="/books">Read Books</Link>
                </li>
            </ul>
          </h1>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
