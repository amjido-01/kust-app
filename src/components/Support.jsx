import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Contribute } from "./Contribute";
import { ListElements } from "./ListElements";

export const Support = () => {
  const testing = (
    <ListElements
      listOne="The monthly domain subscription,"
      listTwo="Data we used for building and managing the website,"
      listThree="API subscription"
      listFour=" Database management "
    />
  );

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
              className="uppercase text-start font-semibold text-[1.4rem] md:text-[32px] leading-[32px] mb-2  md:leading-[49px]"
            >
              Great future are not built alone, but with the help of individuals
              like you !
            </h1>
            <p className="capitalize pb-2 font-medium text-[15px] text-[#333333] md:text-[18px] leading-[18px] md:leading-[28px]">
              ready to do something incredible
            </p>
            <hr className="border-[1px] border-gray-400" />
          </div>
        </div>
        <Contribute
          title="Contribute"
          cls_name="container md:mb-16 -mt-4"
          value="Upload"
          page="/upload"
          content=" By contributing with a single handout or past examination
              question, you have the potential to assist thousands of students
              at this university. Contributions can be made in the form of
              pictures, docx, pptx or PDF files. If you choose to contribute a
              picture, please ensure that it is taken with utmost clarity so
              that no details are missed."
        />

        <hr className="border-[1px] border-gray-400" />

        <Contribute
          cls_name="container md:mt-16 "
          title="Donate"
          value="Donate"
          page="/donate"
          content="By donating to the improvement of this website, you are helping us continue to bring simplicity to our esteemed fellow students. Your donations will be used to purchase necessary materials and such as :
          "
          listElemts={testing}
        />
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
