import React, { useState } from "react";

export const Button = ({ value, color, border, icon, onSmash, onHover, onLeave }) => {
  return (
    <div>
      <button
        onClick={onSmash}
        type="submit"
        style={{ backgroundColor: color, border: border }}
        className={`text-white flex items-center font-medium text-sm px-5 py-2 text-center capitalize ${onHover ? 'hover:bg-gray-400' : ''}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {value}
        {icon}
      </button>
    </div>
  );
};
