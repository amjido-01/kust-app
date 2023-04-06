import React, { useState } from "react";

export const Button = ({ value, color, border, icon, onSmash, hoverColor = "gray" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <button
        onClick={onSmash}
        type="submit"
        style={{ backgroundColor: color, border: border }}
        className={`text-white flex items-center font-medium text-sm px-5 py-2 text-center capitalize ${
          isHovered ? `bg-${hoverColor}` : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {value}
        {icon}
      </button>
    </div>
  );
};
