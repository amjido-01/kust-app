import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import Polygo from "../assets/dept/Polygo.svg";
import Polygon from "../assets/dept/Polygon.svg";
import Polyg from "../assets/dept/Polyg.svg";
import Rectangl from "../assets/dept/Rectangl.svg";
import Rectangle from "../assets/dept/Rectangle.svg";
import Rectang from "../assets/dept/Rectang.svg";
import { motion } from "framer-motion";

export const Dept = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container w-[92%] p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[1.8rem] md:mt-[7rem] flex-1 pb-10">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase font-semibold text-[20px] md:mt-1 mt-[3rem] md:text-[32px] leading-[30px] md:leading-[49px]"
            >
              welcome to the dept page
            </h1>
            <p className="capitalize font-medium text-[14px] md:text-[16px] leading-[18px] md:leading-[28px]">
              choose between department and select your level. then, to
              proceed click/tap on the screen.
            </p>
          </div>

          <div className="container border-[3px] border-[#000000] rounded-[8px] bg-[#F1E2B9] mx-auto">
            <div className="container">
              <h2
                style={{ fontFamily: "poppins" }}
                className="px-2 uppercase deptborder text-center text-[14px] md:py-8 pt-4 font-semibold leading-[20px] md:text-[24px] md:font-semibold"
              >
                {props.faculty}
              </h2>

              <div className="block md:flex justify-evenly font-medium md:text-[16px] uppercase pb-[20px] pt-1 md:pl-6 md:px-8">
                <div className="flex justify-evenly md:justify-around mt-2 mb-4 w-full md:w-1/2 text-[11px] leading-[16px] font-semibold md:text-[18px] md:leading-[30px]">
                  <div className="">
                    <h3 className="text-[13px] font-semibold md:text-[18px] mr-4">
                      {props.deptOne}
                    </h3>

                    <ul className=" list-disc mt-2 text-[12px] md:text-[16px] leading-6 list-inside font-medium md:mt-4">
                      <li className="">
                        <Link to={props.levelOne}>Level one </Link>
                      </li>
                      <li>
                        <Link to={props.levelTwo}>level two</Link>
                      </li>
                      <li>
                        <Link to={props.levelThree}>level three</Link>
                      </li>
                      <li>
                        <Link to={props.levelFour}>level four</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[13px] font-semibold md:text-[18px]">
                      {props.deptTwo}
                    </h3>

                    <ul className=" list-disc list-inside mt-2 text-[12px] leading-6 md:text-[16px] font-medium md:mt-4">
                      <li>
                        <Link>Level one</Link>
                      </li>
                      <li>
                        <Link>level two</Link>
                      </li>
                      <li>
                        <Link>level three</Link>
                      </li>
                      <li>
                        <Link>level four</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex w-full md:w-1/2 justify-evenly md:justify-around my-2 text-[11px] leading-[16px] font-semibold md:text-[18px] md:leading-[30px]">
                  <div className="">
                    <h3 className="text-[13px] font-semibold md:text-[18px]">
                      {props.deptThree}
                    </h3>

                    <ul className="  list-disc list-inside mt-2 text-[12px] md:text-[16px] leading-6 font-medium md:mt-4">
                      <li>
                        <Link to="/documents/facms/ict/level-one-materials">Level one</Link>
                      </li>
                      <li>
                        <Link to="/documents/facms/ict/level-two-materials">level two</Link>
                      </li>
                      <li>
                        <Link>level three</Link>
                      </li>
                      <li>
                        <Link>level four</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="ml-5">
                    <h3 className="text-[13px] font-semibold md:text-[18px]">
                      {props.deptFour}
                    </h3>

                    <ul className="  list-disc list-inside mt-2 text-[12px] md:text-[16px] leading-6 font-medium md:mt-4">
                      <li>Level one</li>
                      <li>
                        <Link>level two</Link>
                      </li>
                      <li>
                        <Link>level three</Link>
                      </li>
                      <li>
                        <Link>level four</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Polygon}
        className="hidden md:block absolute top-[35%] left-[9rem] w-6"
        alt=""
      />
      <img
        src={Rectangl}
        className="hidden md:block absolute top-[25.5%] -z-10 left-[50rem] w-10"
        alt=""
      />
      <img
        src={Rectangle}
        className="hidden md:block absolute top-[60%] left-[27rem] w-10"
        alt=""
      />
      <img
        src={Polyg}
        className="hidden md:block absolute top-[35%] right-0 w-8"
        alt=""
      />
      <img
        src={Rectang}
        className="hidden md:block absolute top-[44%] right-10 w-8"
        alt=""
      />
      <img
        src={Polygo}
        className="hidden md:block absolute top-[57%] left-[65rem] -z-10 w-7"
        alt=""
      />
      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
