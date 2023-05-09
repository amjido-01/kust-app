import React from "react";
import { useState } from "react";

export const Test = () => {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    setShow(true);
  };

  const handleProcced = () => {
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProcced}>Proceed</button>
        </div>
      ) : (
        ""
      )}

      <button onClick={handleDelete} className="border-2">
        delete
      </button>
    </div>
  );
};
