import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Main } from "./Main";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./FourthSection";
import { Fifth } from "./Fifth";
import { Sixth } from "./Sixth";
import { Feedback } from "./Feedback";
import { Footer } from "./Footer";

export const HomePage = () => {


  return (
    <div className="relative min-h-[100vh]">
      <Header />
      <Hero />
      <Main />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Fifth />
      <Sixth />
      <Feedback />
      <Footer className="relative" />
    </div>
  );
};
