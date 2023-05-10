import React from "react";
import { useState } from "react";

export const Test = () => {
  const [highlight, setHighlight] = useState(false);

  const handleClick = () => {
    setHighlight((highlight) => !highlight);
  };

  return (
    <div>
      <p style={{ color: highlight ? "red" : "green" }}>testing font color</p>
      <h1 className={highlight ? "text-3xl" : ""}>hello</h1>
      <button onClick={handleClick} className="border-2">
        change
      </button>
    </div>
  );
};
