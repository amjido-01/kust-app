import React from 'react'
import { Dept } from './Dept'

export const Facms = () => {
  return (
    <div>
        <Dept 
        faculty="FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)"
        deptOne="computer science"
        deptTwo="mathematics"
        deptThree="information tech"
        deptFour={`statistics`}
        ></Dept>
    </div>
  )
}
