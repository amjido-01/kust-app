import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

export const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query)

    const filtered = items.filter((item) => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredItems(filtered)
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />
      <div className="container w-[90%] md:w-[50%] mx-auto mt-[7rem] flex items-center justify-center flex-1">
        <div className="text-center md:w-[70%]">
          <h1 className="text-[#1F1F1F] font-semibold md:font-bold text-[18px] md:text-[19px] leading-6">
            We are a team of two programmers and designers{" "}
          </h1>
          <p className=" font-medium md:font-semibold text-[13px] md:text-[14px] mt-2">
            From kano state, Nigeria. and a students of KUST wudil who dedicated
            thier time to create some innovations and provide simplicity to our
            esteemed fellow students of KUST Wudil.
          </p>
        </div>
      </div>

      <div className="container w-[90%] md:w-[70%] border border-red-500 mx-auto my-10">
        <div className="container">
          <h1 className="text-center uppercase">search</h1>
          <input type="text" value={searchQuery} onChange={handleSearch} placeholder="search"/>

          {filteredItems.map((item) => 
          <li key={item.id}>{item.name}</li>
          ) }
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </section>
  );
};
