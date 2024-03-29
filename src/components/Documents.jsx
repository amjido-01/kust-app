import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import Poly from "../assets/Poly.svg";
import Polyg from "../assets/Polyg.svg";
import Rec from "../assets/Rec.svg";
import Polygo from "../assets/Polygo.svg";
import Ellip from "../assets/Ellip.svg";
import Polygon from "../assets/Polygon.svg";
import seven from "../assets/seven.svg";
import { motion } from "framer-motion";

export const Documents = () => {
  return (
    <motion.section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-full p-8 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[4rem] md:mt-[7rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase font-semibold mb-1 text-[18px] w-full md:text-[32px] leading-[20px] md:leading-[49px]"
            >
              welcome to the document page
            </h1>
            <p className="capitalize font-normal text-[14px] md:text-[18px] leading-[14px] md:leading-[28px]">
              choose your faculty and click/tap to proceed.
            </p>
          </div>

          <div className="container border-[3px] border-[#000000] rounded-[8px] bg-[#B0F2B4] mx-auto">
            <div className="container">
              <h1
                style={{ fontFamily: "poppins" }}
                className="md:text-center px-8 pt-4 text-center docBorder uppercase text-[17px] font-bold leading-[26px] md:text-[24px] md:leading-[42px] md:pt-4 md:font-bold"
              >
                FACULTIES
              </h1>

              <div className=" pt-1 px-[2.5rem] md:px-8 md:pt-[10px] pb-[5rem] flex flex-col md:flex-row md:items-center md:justify-center">
                <div className="w-[100%] flex justify-center items-center mx-auto md:w-[45%]">
                  <ul className=" list-disc ">
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="facms">
                        FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
                      </Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="engineering">FACULTY OF ENGINEERING</Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="">FACULTY OF SCIENCES</Link>
                    </li>
                  </ul>
                </div>

                <div className="w-[100%] flex items-center mx-auto md:w-[45%]">
                  <ul className=" list-disc">
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="">
                        FACULTY OF AGRICULTURE & AGRICULTURAL TECH
                      </Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="">FACULTY OF SCIENCE EDUCATION</Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[12px] font-medium md:text-[18px] leading-[17px] text-[#1F1F1F] md:font-medium md:leading-[27px]">
                      <Link to="">FACULTY OF EARTH & ENVIRONMENTAL SCI</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Poly}
        className="hidden md:block absolute right-[8rem] top-36 md:top-[17%] w-[23px] md:w-[30px]"
        alt=""
      />
      <img
        src={Polyg}
        className="hidden md:block absolute top-[37%] right-0 w-[25px] md:w-[15px]"
        alt=""
      />
      <img
        src={Rec}
        className="hidden md:block absolute -z-10 right-[50%] top-[58%] w-[50px]"
        alt=""
      />
      <img
        src={Polygo}
        className="hidden md:block absolute top-[20%] w-5"
        alt=""
      />
      <img
        src={Polygo}
        className="hidden md:block absolute top-[35%] left-24 w-4"
        alt=""
      />
      <img
        src={Ellip}
        className="hidden md:block absolute right-[8%] md:top-[32%] top-[15%] w-[24px] md:w-[15px]"
        alt=""
      />
      <img
        src={Polygon}
        className="hidden md:block absolute right-0 top-[70%] w-[30px] md:w-[40px]"
        alt=""
      />
      <img
        src={seven}
        className="hidden md:block absolute right-0 md:left-[45%] top-[10%] w-[25px] md:w-[20px]"
        alt=""
      />
      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.section>
  );
};
