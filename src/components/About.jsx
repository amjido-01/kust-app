import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import auto from "../assets/auto.svg";
import auto2 from "../assets/auto2.svg";
import { Autor } from "./Autor";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";

export const About = () => {
  const person = [
    {
      imgURI: auto2,
      qoute:
        "if you love the design and everything you can see, Here is the dude behind it.",
      name: "muhammad Ni’imatullahi aliyu",
      level: "computer science level 200, kUST wudil.",
      role: "frontend developer, UI/UX designer. ",
      alt: "designer",
      qouteColor: "#D9D9D9",
    },
    {
      imgURI: auto,
      qoute:
        "if you love the experience, Here is the soul that made it possible.",
      name: "abubakar muhammad ala",
      level: "computer science level 200, kUST wudil.",
      role: "frontend software engineer.",
      alt: "developer",
      qouteColor: "rgba(252, 158, 28, 0.5)",
    },
  ];
  return (
    <section className="relative">
      <Header />
      <div className="container w-[90%] md:w-[50%] mx-auto mt-[7rem] flex items-center justify-center">
        <div className="text-center md:w-[70%]">
          <h1 className="text-[#1F1F1F] font-semibold md:font-bold text-[18px] md:text-[19px] leading-6">
            We are a team of two programmers and designers{" "}
          </h1>
          <p className=" font-medium md:font-semibold text-[13px] md:text-[14px] mt-2">
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>
      <img
        src={one}
        className="absolute top-[45%] md:top-16 w-[23px] md:w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={two}
        className="absolute -bottom-[12%] left-10 md:left-[30%] w-[25px] md:w-[60px]"
        alt=""
        srcset=""
      />
      <img
        src={three}
        className="absolute top-[60%] w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={four}
        className="absolute right-0 w-[20px] md:right-0 md:top-0 md:w-[20px]"
        alt=""
        srcset=""
      />
      <img
        src={five}
        className="absolute right-[25%] md:top-[10%] top-[15%] w-[24px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={six}
        className="absolute right-0 top-[70%] w-[30px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={seven}
        className="absolute right-0 md:left-[45%] top-[40%] w-[25px] md:w-[35px]"
        alt=""
        srcset=""
      />
      <div className="container w-[90%] md:w-[70%] mx-auto my-10">
        <div className="container flex flex-col md:flex-row">
          <Autor
            src={person[0].imgURI}
            quote={person[0].qoute}
            name={person[0].name}
            level={person[0].level}
            role={person[0].role}
            alt={person[0].alt}
            quoteColor={person[0].qouteColor}
            triangleColor={person[0].qouteColor}
          ></Autor>

          <Autor
            src={person[1].imgURI}
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
    </section>
  );
};
