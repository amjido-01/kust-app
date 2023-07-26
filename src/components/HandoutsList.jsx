import React from "react";
import { Download } from "./Download";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HandoutsList = (props) => {
  return (
    <div className="">
      <div
        style={{ backgroundColor: props.bg, marginBottom: props.mb }}
        className={`rounded-xl border-2 pb-4 border-[#000000] px-5 w-full box`}
      >
        <h3
          style={{ fontStyle: "normal" }}
          className=" font-bold my-2 text-[14px] md:text-[22px] leading-[21px] md:leading-[33px] capitalize"
        >
          {props.title}
        </h3>
        {props.filteredItems.length === 0 && (
          <p className=" font-bold">{props.message}</p>
        )}
        {props.dataLoading ? (
          <div>
            <Skeleton
              baseColor="#edebeb"
              highlightColor="#d6d6d6"
              count={4}
              height={40}
            />{" "}
          </div>
        ) : (
          <ul className="uppercase">
            {props.filteredItems.map((handout, index) => (
              <li
                key={index}
                style={{ fontStyle: "normal" }}
                onClick={() => props.handleButtonClick(handout.handout, false)}
                className="bg-white dd cursor-pointer pl-4 text-[15px] my-[10px] font-medium leading-[20px] uppercase text-[#000000] w-full flex justify-between items-center"
              >
                {handout.title}
                {
                  <Download
                    cls_name="bg-[#755FFE] text-[#FFFFFF] text-[15px] p-2 font-medium leading-[24px] uppercase"
                    onSmash={() => {
                      props.handleButtonClick(handout.handout, true);
                    }}
                  />
                }
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
