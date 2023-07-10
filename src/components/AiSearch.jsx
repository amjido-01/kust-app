import React, { useState } from "react";
import axios from "axios";

export const AiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    e.target.value;
  };

  const handleSearch = async (e) => {
    try {
      const req = await axios();
      console.log(req.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={handleInputChange}
          placeholder="type categry"
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
