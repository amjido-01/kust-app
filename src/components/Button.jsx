import React from "react";

export const Button = ({ value, color, border, icon }) => {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: color, border: border }}
        className="text-white flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
      >
        {value}
        {icon}
      </button>
    </div>
  );
};
