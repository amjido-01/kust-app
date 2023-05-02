import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Docs } from "./Docs";
import { useState } from "react";
import { Data } from "../Data";
import { motion } from "framer-motion";
import { Download } from "./Download";

export const Materials = () => {
  const [data, setData] = useState(Data);
  const [filteredItems, setFilteredItems] = useState(Data);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log(searchQuery);

    const filtered = data.filter((item) =>
      item.first_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[7rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to the download page
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              Please select either the handout or the past question. Then,{" "}
              <br /> click on the download button to receive it on your device.
            </p>
          </div>

          <h4 className="uppercase bg-[#0F9D58] mb-[8px] w-[15rem] text-[#FFFFFF] rounded border-2 border-[#000000] p-[6px]">
            first semester
          </h4>

          <div className="relative my-3" data-te-input-wrapper-init>
            <input
              value={searchQuery}
              onChange={handleSearch}
              type="search"
              className="peer block min-h-[auto] w-[15rem] rounded border-2 border-green-500 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleSearch2"
            />
            <label
              for="exampleSearch2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
            >
              Search
            </label>
          </div>

          <div className="container mx-auto">
            <div className="container">
              <div className="block border-2 md:flex md:justify-between">
                <div
                  style={{ backgroundColor: "#8CB6B5" }}
                  className={` rounded-xl border-2 pb-4 border-[#000000] px-5 w-full md:w-[49.5%]`}
                >
                  <h3>HandOuts</h3>
                  {filteredItems.length === 0 && (
                    <p className="mt-10 text-white">No such file found :)</p>
                  )}
                  <ul className=" uppercase">
                    {filteredItems.map((item) => (
                      <li
                        key={item.id}
                        style={{ fontStyle: "normal" }}
                        className="bg-white pl-4 text-[15px] my-[10px] font-medium leading-[24px] uppercase text-[#000000] w-full flex justify-between items-center"
                      >
                        {item.first_name} {<Download />}
                      </li>
                    ))}
                  </ul>
                </div>



                  <div
                  style={{ backgroundColor: "#8CB6B5" }}
                  className={` rounded-xl border-2 pb-4 border-[#000000] px-5 w-full md:w-[49.5%]`}
                >
                  <h3>HandOuts</h3>
                  {filteredItems.length === 0 && (
                    <p className="mt-10 text-white">No such file found :)</p>
                  )}
                  <ul className=" uppercase">
                    {filteredItems.map((item) => (
                      <li
                        key={item.id}
                        style={{ fontStyle: "normal" }}
                        className="bg-white pl-4 text-[15px] my-[10px] font-medium leading-[24px] uppercase text-[#000000] w-full flex justify-between items-center"
                      >
                        {item.first_name} {<Download />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};