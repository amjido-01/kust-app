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
import { motion } from "framer-motion";

export const HomePage = () => {
  // initial={{ opacity: 0, scale: 0.5 }}
  //     animate={{ opacity: 1, scale: 1 }}
  //     transition={{
  //       duration: 0.5,
  //       ease: [0, 0.71, 0.2, 1.01],
  //       scale: {
  //         type: "spring",
  //         damping: 10,
  //         stiffness: 100,
  //         restDelta: 0.001,
  //       },
  //     }}

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-[100vh] w-full overflow-x-hidden"
    >
      <Header />
      <Hero />
      <Main />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div className="text-red-500 text-lg fixed z-40 top-[70%]">test</div>
      <Fifth />
      <Sixth />
      <Feedback />
      <Footer className="relative" />
    </motion.div>
  );
};
