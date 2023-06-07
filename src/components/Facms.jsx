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
        levelOne="/documents/facms/coms/level-one-materials"
        levelTwo="/documents/facms/coms/level-two-materials"
        levelThree="/documents/coms/facms/level-three-materials"
        levelFour="/documents/coms/facms/level-four-materials"
      ></Dept>
    </motion.div>
  );
};
