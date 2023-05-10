import React from "react";
import { useState } from "react";
import axios from "axios";

export const Dic = () => {
  const [word, setWord] = useState("");
  const [defination, setDefination] = useState("");
  const [test, setTest] = useState("")
  const [pho, setPho] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = res.data[0].meanings[0].definitions[0].definition;
      const test = res.data[0].word;
      console.log(data);
      console.log(test);
      setDefination(data);
      setWord("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <p>
        Dictionary
      </p>

      <input
        className="border-2 border-green-500"
        type="text"
        value={word}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>search</button>
      <p>{word}</p>
      <p>{defination}</p>
    </div>
  );
};
