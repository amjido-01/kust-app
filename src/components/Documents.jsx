import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { Data } from "../Data";


export const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(Data);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log(searchQuery);

    const filtered = Data.filter((item) =>
      item.first_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-[90%] md:w-[66%] mx-auto mt-[7rem] flex-1 border-2 border-red-600 mb-[50px]">
        <div className="text-[#000000] my-7">
          <h1 className="uppercase font-semibold text-[22px]">
            welcome to the document page{" "}
          </h1>
          <p className="capitalize font-normal">
            choose your faculty and click/tap to proceed.
          </p>
        </div>

        <div className="container bg-[#B0F2B4] border border-red-500 mx-auto">
          <div className="container">
            <h1 className="text-center uppercase">FACULTIES</h1>
            <input
              type="text"
              className="border-2 border-green-500"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="search"
            />

            <div className="border-2 border-yellow-400 flex flex-col md:flex-row md:items-center md:justify-center">
              <div className="w-[100%] flex justify-center items-center  mx-auto md:w-[45%]">
                <ul className=" list-disc">
                  {filteredItems.map((item) => (
                    <a key={item.id} href="#">
                      <li className="p-0.5 text-[14px] font-normal ">
                        {item.first_name}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>

              <div className="w-[45%]">
                <ul className=" list-disc">
                  {filteredItems.map((item) => (
                    <a key={item.id} href="#">
                      <li className="p-0.5 text-[14px] font-normal ">
                        {item.first_name}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </section>
  );
};
