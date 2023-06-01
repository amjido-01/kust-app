import React from "react";
import { Dept } from "./Dept";
import { motion } from "framer-motion";

export const Facms = () => {
  return (
    <motion.div>
      <Dept
        faculty="FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)"
        deptOne="computer science"
        deptTwo="mathematics"
        deptThree="information tech"
        deptFour={`statistics`}
        levelOne="/documents/facms/level-one-materials"
        levelTwo="/documents/facms/level-two-materials"
        levelThree="/documents/facms/level-three-materials"
        levelFour="/documents/facms/level-four-materials"
      ></Dept>
    </motion.div>
  );
};
