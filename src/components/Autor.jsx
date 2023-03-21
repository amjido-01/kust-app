import React from "react";

export const Autor = ({ src, quote, name, level, role, alt, quoteColor, triangleColor }) => {
  return (
    <div className="border-2 border-green-600 text-[#000000]">
      <div className="border-2 flex flex-col justify-center items-center">
        <p
          className="p-3 w-[60%] mx-auto mt-5 rounded text-[14px] font-medium"
          style={{ background: quoteColor }}
        >
          {quote}
        </p>
        <span className="down-triangle border-t-[30px]"></span>
      </div>
      <img src={src} className="w-[70%] mx-auto text-[#000000]" alt={alt} />
      <div className="content border-2 capitalize text-center">
        <h1 className=" font-bold text-[18px]">{name}</h1>
        <p className="font-bold text-[14px]">{level}</p>
        <span className=" italic text-[13px] font-normal">{role}</span>
      </div>
    </div>
  );
};
