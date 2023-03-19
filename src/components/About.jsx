import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import auto from "../assets/auto.svg";
import auto2 from "../assets/auto2.svg";
import { Autor } from "./Autor";

export const About = () => {
  const person = [
    {
      qoute:
        "if you love the design and everything you can see here is the dude behind it.",
      name: "muhammad Ni’imatullahi aliyu",
      level: "computer science level 200, kUST wudil.",
      role: "frontend developer, UI/UX designer. ",
    },
    {
      qoute:
        "if you love the experience here is the soul that made it possible.",
      name: "abubakar muhammad ala",
      level: "computer science level 200, kUST wudil.",
      role: "fullstack engineer, software engineer.",
    },
  ];
  return (
    <section className="relative">
      <Header />
      <div className="container md:w-[65%] mx-auto border-2 mt-20 flex items-center justify-center">
        <div className="text-center w-1/2  border-2">
          <h2 className="text-[#1F1F1F] font-bold text-[18px] leading-8">
            We are a team of two programmers and designers{" "}
          </h2>
          <p>
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>

      <div className="container mx-auto border-2 border-700-green my-20">
        <div className="flex border-2 container w-1/2">
          <Autor
            src={auto2}
            quote={person[0].qoute}
            name={person[0].name}
            level={person[0].level}
            role={person[0].role}
          ></Autor>

          <Autor
            src={auto}
            quote={person[1].qoute}
            name={person[1].name}
            level={person[1].level}
            role={person[1].role}
          ></Autor>
        </div>
      </div>

      <Footer className="absolute w-full" />
    </section>
  );
};
