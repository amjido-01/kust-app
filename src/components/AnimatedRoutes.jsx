import React from "react";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { Documents } from "./Documents";
import { Support } from "./Support";
import { PageNotFound } from "./PageNotFound";
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
import { Upload } from "../../Upload";
import { Books } from "./Books";
import { Study } from "./Study";
import { Pground } from "./Pground";
import { ComLevelOne } from "./ComLevelOne";
import { ComLevelTwo } from "./ComLevelTwo";
import { ComLevelThree } from "./ComLevelThree";
import { ComLevelFour } from "./ComLevelFour";
import { IctLevelOne } from "./FACMS/ict/IctLevelOne";
import { IctLevelTwo } from "./FACMS/ict/IctLevelTwo";
import { IctLevelThree } from "./FACMS/ict/IctLevelThree";
import { IctLevelFour } from "./FACMS/ict/IctLevelFour";
import { MathsLevelFour } from "./FACMS/maths/MathsLevelFour";
import { MathsLevelOne } from "./FACMS/maths/MathsLevelOne";
import { MathsLevelThree } from "./FACMS/maths/MathsLevelThree";
import { MathsLevelTwo } from "./FACMS/maths/MathsLevelTwo";
import { StaLevelFour } from "./FACMS/stat/StaLevelFour";
import { StaLevelOne } from "./FACMS/stat/StaLevelOne";
import { StaLevelTwo } from "./FACMS/stat/StaLevelTwo";
import { StaLevelThree } from "./FACMS/stat/StaLevelThree";
import { Donate } from "./Donate";
import { Mat } from "./Mat";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="documents" element={<Documents />}></Route>
        <Route path="support-us" element={<Support />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="playground" element={<Pground />}></Route>
        <Route path="dictionary" element={<Dic />}></Route>
        <Route path="handouts" element={<Handouts />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="upload" element={<Upload />}></Route>
        <Route path="donate" element={<Donate />}></Route>
        <Route path="study" element={<Study />}></Route>
        <Route path="mat" element={<Mat />}></Route>
        <Route path="documents/facms" element={<Facms />}></Route>
        <Route
          path="documents/facms/coms/level-one-materials"
          element={<ComLevelOne />}
        ></Route>
        <Route
          path="documents/facms/coms/level-two-materials"
          element={<ComLevelTwo />}
        ></Route>
        <Route
          path="documents/facms/coms/level-three-materials"
          element={<ComLevelThree />}
        ></Route>
        <Route
          path="documents/facms/coms/level-four-materials"
          element={<ComLevelFour />}
        ></Route>
        <Route
          path="documents/facms/ict/level-one-materials"
          element={<IctLevelOne />}
        ></Route>
        <Route
          path="documents/facms/ict/level-two-materials"
          element={<IctLevelTwo />}
        ></Route>
        <Route
          path="documents/facms/ict/level-three-materials"
          element={<IctLevelThree />}
        ></Route>
        <Route
          path="documents/facms/ict/level-four-materials"
          element={<IctLevelFour />}
        ></Route>
        <Route
          path="documents/facms/maths/level-one-materials"
          element={<MathsLevelOne />}
        ></Route>
        <Route
          path="documents/facms/maths/level-two-materials"
          element={<MathsLevelTwo />}
        ></Route>
        <Route
          path="documents/facms/maths/level-three-materials"
          element={<MathsLevelThree />}
        ></Route>
        <Route
          path="documents/facms/maths/level-four-materials"
          element={<MathsLevelFour />}
        ></Route>
        <Route path="documents/engineering" element={<Engineering />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
