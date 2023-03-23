import React from "react";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
export const Faculties = () => {
  const Data = people.map((person) => {
    console.log(person.name);
  });
  //   const facultiesListItems = facultiesList.map((faculty) =>
  //     <li key={faculty.id}>{faculty}</li>
  //     // console.log(faculty.name, faculty.id)
  //   );
  return (
    <div className="text-center bg-[#B0F2B4] rounded-md border-[3px] border-black">
      <h1 className="uppercase my-5 border-2">faculties</h1>
      <div className="flex justify-evenly border-2 border-red-500">
        <ul className=" list-disc text-[10px] font-medium p-10 text-black">{Data}</ul>
      </div>
    </div>
  );
};

{
  /* <ul className="list-disc text-[10px] font-medium p-10">
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
          <li className="p-1">
            FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
          </li>
        </ul> */
}
