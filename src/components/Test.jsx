import React from "react";
import { useState } from "react";

export const Test = () => {
  const [highlight, setHighlight] = useState(false);

  const handleDelete = () => {
    setHighlight(true)
  };

  const handleProcced = () => {
    setHighlight(false)
  }
  return (
    <div>
      {highlight ? <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleProcced} className="border-2 border-green-400">Proceed</button>
      </div>
: ""}
      <button onClick={handleDelete} className="border-2 border-green-400">Change</button>
    </div>
  );
};
