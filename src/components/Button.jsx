import React, { useState } from "react";

export const Button = ({ value, color, border, icon, onSmash, cls_name }) => {
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
        className={cls_name}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {value}
        {icon}
      </button>
    </div>
  );
};
