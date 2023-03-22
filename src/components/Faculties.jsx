import React from "react";

const facultiesList = [
  {
    id: 0,
    name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
  },
  {
    id: 1,
    name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
  },
  {
    id: 2,
    name: "FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)",
  },
];
export const Faculties = () => {
  const facultiesListItems = facultiesList.map((faculty) => <li key={faculty.id}>{faculty}</li>);
  console.log(facultiesListItems)
  console.log(facultiesList)
  return (
    <div className="text-center bg-[#B0F2B4] rounded-md border-[3px] border-black">
      <h1 className="uppercase my-5 border-2">faculties</h1>
      <div className="flex justify-evenly border-2 border-red-500">
        <ul className=" list-disc text-[10px] font-medium p-10">
          {/* <li key={faculty.id}>{facultiesListItems}</li> */}
          {/* {facultiesListItems} */}
        </ul>
        <ul className="list-disc text-[10px] font-medium p-10">
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
        </ul>
      </div>
    </div>
  );
};
