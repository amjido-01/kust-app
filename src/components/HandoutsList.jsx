import React from 'react';
import { Download } from './Download';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HandoutsList = (props) => {

  return (
    <div>
          {/* <div className="relative my-3" data-te-input-wrapper-init>
            <input
              value={props.searchQuery}
              onChange={props.handleSearch}
              type="search"
              className="peer block min-h-[auto] w-[15rem] rounded border-2 border-green-500 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleSearch2"
            />
            <label
              htmlFor="exampleSearch2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
            >
              Search
            </label>
          </div> */}
          <div
                  style={{ backgroundColor: props.bg }}
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
                      <Skeleton baseColor="#edebeb" highlightColor="#d6d6d6" count={4} height={40} />{" "}
                    </div>
                  ) : (
                    <ul className=" uppercase">
                      {props.filteredItems.map((handout, index) => (
                        <li
                          key={index}
                          style={{ fontStyle: "normal" }}
                          onClick={() =>
                            props.handleButtonClick(handout.handout, false)
                          }
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
  )
}
