import React from "react";
import { File } from "./File";

export const Docs = (props) => {
  return (
    <div style={{backgroundColor: props.background}} className={`w-full md:w-[49.5%] border-2 border-orange-500 `}>
      <h4 className="">{props.title}</h4>
        <File />
    </div>
  );
};
