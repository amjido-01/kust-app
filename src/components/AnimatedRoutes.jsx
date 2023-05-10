import React from "react";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { Documents } from "./Documents";
import { Support } from "./Support";
import { PageNotFound } from "./PageNotFound";
import { Sample } from "./Sample";
import { Engineering } from "./Engineering";
import { Facms } from "./Facms";
import { Test } from "./Test";
import { Materials } from "./Materials";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Handouts } from "../Handouts";
import { Dic } from "./Dic";



export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<About />}>
          {" "}
        </Route>
        <Route path="documents" element={<Documents />}></Route>
        <Route path="support-us" element={<Support />}>
          {" "}
        </Route>
        <Route path="test" element={<Test />}>
          {" "}
        </Route>
        <Route path="dictionary" element={<Dic />}>
          {" "}
        </Route>
        <Route path="sample" element={<Sample />}>
          {" "}
        </Route>
        <Route path="handouts" element={<Handouts />}>
          {" "}
        </Route>
        <Route path="documents/facms" element={<Facms />}>
          {" "}
        </Route>
        <Route
          path="documents/facms/level-one-materials"
          element={<Materials />}
        >
          {" "}
        </Route>
        <Route path="documents/engineering" element={<Engineering />}>
          {" "}
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
