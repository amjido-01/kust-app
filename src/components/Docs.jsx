import React from "react";
import { File } from "./File";

export const Docs = (props) => {
  const container = [];
  for (let i = 0; i < 10; i++) {
    container.push(<File key={i}/>)
  }
  return (
    <div style={{backgroundColor: props.background}} className={`rounded border-2 pb-4 border-[#000000] w-full md:w-[49.5%]`}>
      <h4 className=" font-semibold text-[18px] py-[6px] leading-[33px] w-[92%] mx-auto">{props.title}</h4>
        {container}
    </div>
  );
};
