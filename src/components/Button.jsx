import React, { useState } from "react";
import { motion } from "framer-motion";

export const Button = ({ value, icon, onSmash, cls_name }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={onSmash}
        type="submit"
        className={cls_name}
      >
        {value}
        {icon}
      </motion.button>
    </div>
  );
};
