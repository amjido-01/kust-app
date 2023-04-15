import React, { useState } from "react";

export const Button = ({ value, icon, onSmash, cls_name }) => {

  return (
    <div>
      <button
        onClick={onSmash}
        type="submit"
        className={cls_name}
      >
        {value}
        {icon}
      </button>
    </div>
  );
};