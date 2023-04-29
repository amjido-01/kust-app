import React from "react";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { Documents } from "./Documents";
import { Support } from "./Support";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { PageNotFound } from "./PageNotFound";
import { Sample } from "./Sample";
import { Engineering } from "./Engineering";
import { Facms } from "./Facms";
import { Test } from "./Test";
import { Materials } from "./Materials";
import { useLocation } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
 
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="documents" element={<Documents />}></Route>
        <Route path="support-us" element={<Support />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="sample" element={<Sample />}></Route>
        <Route path="documents/facms" element={<Facms />}></Route>
        <Route
          path="documents/facms/level-one-materials"
          element={<Materials />}
        ></Route>
        <Route path="documents/engineering" element={<Engineering />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
