import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import auto from "../assets/auto.svg";
import auto2 from "../assets/auto2.svg";
import { Autor } from "./Autor";

export const About = () => {
  const person = [
    {
      imgURI: auto2,
      qoute:
        "if you love the design and everything you can see here is the dude behind it.",
      name: "muhammad Ni’imatullahi aliyu",
      level: "computer science level 200, kUST wudil.",
      role: "frontend developer, UI/UX designer. ",
      alt: "designer",
      qouteColor: "#D9D9D9",
      // triangleColor: "#D9D9D9" 
    },
    {
      imgURI: auto,
      qoute:
        "if you love the experience here is the soul that made it possible.",
      name: "abubakar muhammad ala",
      level: "computer science level 200, kUST wudil.",
      role: "frontend software engineer.",
      alt: "developer",
      qouteColor: "rgba(252, 158, 28, 0.5)",
      // triangleColor: "rgba(252, 158, 28, 0.5)"
    },
  ];
  return (
    <section className="relative">
      <Header />
      <div className="container md:w-[65%] mx-auto mt-[7rem] flex items-center justify-center">
        <div className="text-center w-1/2">
          <h1 className="text-[#1F1F1F] font-bold text-[19px] leading-6">
            We are a team of two programmers and designers{" "}
          </h1>
          <p className=" font-semibold text-[14px] mt-2">
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>

      <div className="container w-[70%] mx-auto border-2 border-700-green my-10">
        <div className="container flex flex-col md:flex-row border-2 border-red-500">
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
