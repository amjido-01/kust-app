import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          className="p-2 rounded focus:outline-none sm:hidden"
          onClick={toggleExpand}
        >
        <CiSearch />
        </button>
        <CSSTransition
          in={expanded}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <input
            type="text"
            className={`pl-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-4 sm:w-40`}
            placeholder="Search"
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default InputSearch;

