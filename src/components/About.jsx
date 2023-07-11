import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import auto from "../assets/auto.svg";
import auto2 from "../assets/auto2.svg";
import auto2sq from "../assets/auto2sq.jpg";
import autosq from "../assets/autosq.jpg";
import { Autor } from "./Autor";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";
import { motion } from "framer-motion";

export const About = () => {
  const person = [
    {
      imgURI: auto2,
      qoute:
        "if you love the design and everything you can see, Here is the dude behind it.",
      name: "Muhammad Ni’imatullahi aliyu",
      level: "computer science level 200, kUST wudil.",
      role: "frontend developer, UI/UX designer. ",
      alt: "designer",
      qouteColor: "#D1DFF5",
    },
    {
      imgURI: auto,
      qoute:
        "if you love the experience, Here is the soul that made it possible.",
      name: "Abubakar muhammad ala",
      level: "computer science level 200, kUST wudil.",
      role: "frontend software engineer.",
      alt: "developer",
      qouteColor: "#FECF8D",
    },
  ];
  console.log(auto2sq);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <Header />
      <div className="container w-[90%] mt-24 ml-6 md:w-full md:ml-36 md:mt-[8rem] ">
        <div className="text-start w-[95%] md:w-[70%]">
          <h1 className="text-[#1F1F1F] font-bold md:font-bold uppercase md:leading-[32px] leading-[28px] text-[18px] md:text-[28px]">
            We are a team of two programmers
          </h1>
          <p className=" font-normal leading-[21px] text-justify md:font-normal pb-2 text-[14px] md:text-[14px] mt-1">
            We are students of Kano University of Science and Technology (KUST),
            Wudil, Nigeria. We have dedicated our time for creating innovative
            solutions that provide simplicity to our esteemed fellow students of
            KUST Wudil.
          </p>
        </div>
      </div>
      <hr className="w-[80%] mx-auto md:my-4 "></hr>
      <img
        src={one}
        className="absolute top-[45%] md:top-16 w-[23px] md:w-[30px]"
        alt=""
      />
      <img
        src={two}
        className="absolute -bottom-[12%] left-10 md:left-[30%] w-[25px] md:w-[60px]"
        alt=""
      />
      <img src={three} className="absolute top-[60%] w-[30px]" alt="" />
      <img
        src={four}
        className="absolute right-0 w-[20px] md:right-0 md:top-0 md:w-[20px]"
        alt=""
      />
      <img
        src={five}
        className="absolute right-[25%] md:top-[10%] top-[15%] w-[24px] md:w-[40px]"
        alt=""
      />
      <img
        src={six}
        className="absolute right-0 top-[70%] w-[30px] md:w-[40px]"
        alt=""
      />
      <img
        src={seven}
        className="absolute right-0 md:left-[45%] top-[40%] w-[25px] md:w-[35px]"
        alt=""
      />
      <div className="container w-[90%] md:w-[70%] mx-auto my-10">
        <div className="container flex flex-col md:flex-row">
          <Autor
            cls_name={"text-[#000000]"}
            src={person[0].imgURI}
            placeHolder={autosq}
            quote={person[0].qoute}
            name={person[0].name}
            level={person[0].level}
            role={person[0].role}
            alt={person[0].alt}
            quoteColor={person[0].qouteColor}
            triangleColor={person[0].qouteColor}
          ></Autor>

          <Autor
            cls_name={"text-[#000000] mt-8"}
            src={person[1].imgURI}
            placeHolder={auto2sq}
            quote={person[1].qoute}
            name={person[1].name}
            level={person[1].level}
            role={person[1].role}
            alt={person[1].alt}
            quoteColor={person[1].qouteColor}
            triangleColor={person[1].qouteColor}
          ></Autor>
        </div>
      </div>
      <Footer className="absolute w-full" />
    </motion.div>
  );
};
