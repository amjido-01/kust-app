import React from "react";
import { useState } from "react";

export const Test = () => {
  const [update, setUpdate] = useState("hello");
  const [name, setName] = useState("");

  const handleClick = () => {
    setUpdate("hello world");
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      {update} <br></br>
      <button onClick={handleClick} className="border-2 border-green-500">
        click me
      </button>
      <input type="text" value={name} onChange={handleInput} />
      <p>Name: {name}</p>
    </div>
  );
};
