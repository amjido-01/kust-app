import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import amico from "../assets/amico.png"
import cuate from "../assets/cuate.png"
import webinarPana from "../assets/webinarPana.png"
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
         <div className="border-2 mt-24 md:mt-[8rem] mx-auto">
            <div className="border-2">
                <h2 className="poppins font-bold text-[36px] leading-[54px] capitalize">Want to study ahead, we Got you covered</h2>
                <p className="mt-[14px] md:w-[90%] font-normal text-[20px] leading-[30px]">This platform provides an environment for you to enhance your knowledge and gain new ideas. The internet is so vast that it is rare to search for something and not find it. However, some students still struggle to find relevant reading materials for their respective courses. That is why we have built this amazing catalogue for your best interest. We hope you will find it useful. Good luck</p>
            </div>

            <div className="mt-20 md:border-b-[1.5px] border-gray-700 relative py-16 md:py-2 px-8">
      <div className="second_section mx-auto flex flex-col md:flex-row-reverse items-center justify-center capitalize">

        <div
          className="text-white md:w-1/2 mt-0 md:mt-5 mb-5 md:ml-10 pl-4"
        >
          <img
            src={amico}
            className="object-cover w-[70%] md:w-[85%] md:ml-[2rem]"
            alt="section_img"
          />
        </div>

        <div
          className="md:w-1/2 text-start  w-[95%] ml-12"
        >
          <h1 className="font-bold text-[16px] md:mt-1 leading-[32px] py-4 unbounded">
            Dictionary
          </h1>
          <p className=" md:w-[60%] ">
          Meet your dictionary copilot, your ultimate vocabulary source. Find definitions, pronunciation and more. Boost your language skills and learn new words. Visit it now and see what your dictionary copilot can do for you!
          </p>
          <div>
            <Button
            value="Explore"
            cls_name="text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
            >Explore</Button>
          </div>
        </div>

      </div>

    </div>

    <div className="bg-[#111]  md:border-b-[1.5px] border-gray-700 relative py-16 md:py-2 px-8">
      <div className="second_section border-2 border-red-500 mx-auto flex flex-col md:flex-row items-center justify-center capitalize">

        <div
          data-aos="fade-right"
          className="text-white md:w-1/2 mt-0 md:mt-5 mb-5 md:ml-10 pl-4"
        >
          <img
            src={cuate}
            className="object-cover w-[70%] md:w-[85%] md:ml-[2rem]"
            alt="section_img"
          />
        </div>

        <div
          data-aos="fade-left"
          className="text-[#D9D9D9] md:w-1/2 text-start  w-[95%] ml-12"
        >
          <h1 className="font-bold text-[16px] md:mt-1 leading-[32px] py-4 unbounded">
            Books
          </h1>
          <p className=" md:w-[60%] ">
          Welcome to your books co-pilot, a selection of books on various topics that will interest and educate you. Browse our amazing books section and find your next favorite read
          </p>
          <div>
            <Button
            value="Explore"
            cls_name="text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
            >Explore</Button>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-20 md:border-b-[1.5px] border-gray-700 relative py-16 md:py-2 px-8">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center capitalize">

        <div
          className="text-white md:w-1/2 mt-0 md:mt-5 mb-5 md:ml-10 pl-4"
        >
          <img
            src={webinarPana}
            className="object-cover w-[70%] md:w-[85%] md:ml-[2rem]"
            alt="section_img"
          />
        </div>

        <div
          className="md:w-1/2 text-start  w-[95%] ml-12"
        >
          <h1 className="font-bold text-[16px] md:mt-1 leading-[32px] py-4 unbounded">
          talk to aI and help you discover  it
          </h1>
          <p className=" md:w-[60%] ">
          Use AI to study smarter. Get personalized recommendations and resources tailored to your needs. Save time and effort by getting the most relevant information for your studies. Start using AI today and see the difference it can make in your studies.
          </p>
          <div>
            <Button
            value="Try it Now"
            cls_name="text-white bg-[#0F9D58] rounded-[4px] border-none hover:bg-[#0F9D58] border flex items-center font-medium text-[12px] md:text-sm px-4 md:px-5 py-2 text-center capitalize"
            >Explore</Button>
          </div>
        </div>
      </div>
    </div>

         </div>
    </motion.div>
  )
}
