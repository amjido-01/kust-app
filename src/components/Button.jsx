import React from "react";

export const Button = ({ value, color, border, icon, onSmash, mouseOver, mouseDown }) => {
  return (
    <div>
      <button
        onClick={onSmash}
        onMouseOver={mouseOver}
        onMouseOut={mouseDown}
        type="submit"
        style={{ backgroundColor: color, border: border }}
        className="text-white flex items-center font-medium ${hoverState} text-sm px-5 py-2 text-center capitalize"
      >
        {value}
        {icon}
      </button>
    </div>
  );
};
