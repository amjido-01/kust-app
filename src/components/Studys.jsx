import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import library4 from "../assets/library4.jpg";
import dic from "../assets/dic.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "./Button";

export const Study = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container text-center w-full p-4 md:p-0 md:w-[73%] md:mb-20 mx-auto mt-[5rem] md:mt-[8rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[17px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              Want To study ahead?
              <br />
              Got you covered!
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              happy learning!
            </p>
          </div>
        </div>

        <div className="container mt-[15%] md:mt-[8%]">
          <h1
            style={{ fontFamily: "Poppins" }}
            className=" uppercase font-medium "
          >
            <ul className="flex flex-col gap-4 md:gap-2 md:flex-row justify-around">
              <li className="border-2 text-[20px] mx-auto my-4 md:my-0 w-full md:w-[40%]">
                <Link to="/dictionary">
                  <LazyLoadImage
                    effect="blur"
                    src={dic}
                    alt="dictionary"
                    className=" object-cover"
                  />
                </Link>
                <p className="text-[16px] md:text-[18px] md: mb-[2rem]">
                  Build Your Vocabulary Everyday with this amazing ddictionary{" "}
                </p>
                {/* <Link
                  className="text-white w-[8rem] mx-auto my-2 cursor bg-[#4285F4] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
                  to="/dictionary"
                >
                  Dictionary
                </Link> */}
                <Button
                  value="Dictionary"
                  cls_name=" mx-auto my-2 text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize "
                />
              </li>
              <li className="border-2 text-[20px] mb-4 md:mb-0 mx-auto w-full md:w-[40%]">
                <Link to="/books">
                  <LazyLoadImage
                    effect="blur"
                    src={library4}
                    alt=""
                    className="object-cover"
                  />
                </Link>
                <p className="text-[16px] md:text-[18px]">
                  read and Get Books Recommendation for All Courses!
                </p>
                <Button
                  value="Read Books"
                  cls_name=" mx-auto my-2 text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
                />
                {/* <Link
                  className="text-white w-[8rem] mx-auto my-2 cursor bg-[#4285F4] start flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
                  to="/books"
                >
                  Read Books
                </Link> */}
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
