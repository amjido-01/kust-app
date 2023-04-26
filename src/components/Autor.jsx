import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Autor = ({
  src,
  quote,
  name,
  level,
  role,
  alt,
  quoteColor,
  triangleColor,
  placeHolder
}) => {
  return (
    <div className="text-[#000000]">
      <div className="flex flex-col justify-center items-center">
        <p
          className="p-2 md:p-3 w-[90%] md:w-[70%] mx-auto mt-5 rounded text-[12px] md:text-[14px] font-normal md:font-medium"
          style={{ background: quoteColor }}
        >
          {quote}
        </p>
        <span
          className="down-triangle"
          style={{
            borderLeft: "transparent solid 15px",
            borderRight: "transparent solid 15px",
            borderTop: `30px solid ${triangleColor}`,
          }}
        ></span>
      </div>
      <LazyLoadImage
        src={src}
        effect="blur"
        className="w-[70%] mx-auto text-[#000000] my-2"
        placeholderSrc={placeHolder}
        alt={alt}
      />
      <div className="content capitalize text-center bg-[#D9D9D9] rounded-[8px] w-[90%] md:w-[70%] p-2 md:p-1 mx-auto">
        <h1 className="font-semibold md:font-bold text-[14px] md:text-[18px]">
          {name}
        </h1>
        <p className="font-semibold md:font-bold text-[11px] md:text-[14px]">
          {level}
        </p>
        <span className=" italic text-[12px] md:text-[13px] font-normal">
          {role}
        </span>
      </div>
    </div>
  );
};
