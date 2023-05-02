import React from 'react'
import { Dept } from './Dept'
import { motion } from 'framer-motion'

export const Facms = () => {
  return (
    <motion.div>
        <Dept 
        faculty="FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)"
        deptOne="computer science"
        deptTwo="mathematics"
        deptThree="information tech"
        deptFour={`statistics`}
        ></Dept>
    </motion.div>
  )
}
