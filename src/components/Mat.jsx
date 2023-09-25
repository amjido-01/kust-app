import React from 'react'
import { Header } from './Header'
export const Mat = (props) => {
  return (
    <div>
        <Header />

        <div className="heading mt-40 border-2 border-red-500 w-[85%] md:w-[73%]">
            <h1 style={{ fontFamily: "poppins" }}
              className="uppercase font-semibold text-[20px] md:mt-2 mt-[2rem] md:text-[32px] leading-[31px] md:leading-[49px]">
                 welcome to {props.department} sci, level {props.level} download
              page
              </h1>
            <p>Please select either the handout or the past question. Then, click on the download button to receive it on your device.</p>
        </div>
    </div>
  )
}
