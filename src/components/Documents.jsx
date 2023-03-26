import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { Data } from "../Data";

console.log(Data);

export const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(Data);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log(searchQuery)

    const filtered = Data.filter((item) =>
      item.first_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />
      <div className="container w-[90%] md:w-[50%] mx-auto mt-[7rem] flex-1">
       <h1>welcome to the document page </h1>
      </div>

    
      <div className="container w-[90%] md:w-[70%] border border-red-500 mx-auto my-10">
        <div className="container">
          <h1 className="text-center uppercase">FACULTIES</h1>
          <input
            type="text"
            className="border-2 border-green-500"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="search"
          />

          <ul className=" list-disc">
            {filteredItems.map((item) => (
              <a key={item.id} href="#"><li>{item.first_name}</li></a>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </section>
  );
};
