import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CiSearch } from 'react-icons/ci';

const InputSearch = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        {/* Always render the input field, but conditionally hide it with CSS */}
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          className={`pl-4 py-2 w-[80%] bg-[#EEEEEE] my-auto rounded focus:outline-none focus:ring-1 focus:ring-[#111] sm:ml-4 sm:w-40 md:w-full ${
            !expanded && 'hidden md:block' /* Hide on small screens if not expanded */
          }`}
          placeholder="Search"
        />
        <button
          className="p-2 rounded focus:outline-none md:hidden"
          onClick={toggleExpand}
        >
          <CiSearch className="text-[1.8em]" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
