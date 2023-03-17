import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export const About = () => {
  return (
    <section>
      <Header />
      <div className="border-2 mt-20">
        <h2>We are a team of two programmers and designers </h2>
        <p>
          From kano state, Nigeria. and a students of KUST wudil who dedicated
          thier time to create some innovations and provide simplicity to our
          esteemed fellow students of KUST Wudil.
        </p>
      </div>
      <Footer className="absolute w-full bottom-0" />
    </section>
  );
};
