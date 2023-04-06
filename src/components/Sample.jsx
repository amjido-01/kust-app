import React from "react";

export const Sample = () => {
  const List = [
    {
      name: "It's composable",
      id: 0,
    },
    {
      name: "It's Declarative",
      id: 1,
    },
    {
      name: "It's a hirable skill",
      id: 2,
    },
    {
      name: "It's a game changer for frondend Dev.",
      id: 3,
    },
  ];
  const listItems = List.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div>
      <h1 className="bg-[#1f1f1f] text-[#f5f5f5] p-20 text-2xl font-bold text-center">
        My Awesome ❤ React Course
      </h1>
      <h4 className=" text-xl p-5 font-bold">Why you should learn React</h4>
      <ul className="lists pl-10 font-medium text-xl">{listItems}</ul>
      <div className="border-2 border-red-600">
      </div>
    </div>
  );
};
