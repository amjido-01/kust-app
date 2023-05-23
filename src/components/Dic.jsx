import React from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const Dic = () => {
  const [word, setWord] = useState("");
  const [defination, setDefination] = useState(
    "Discover the world of words with KustBooklet Dictionary, your language companion for definitions, synonyms, and more."
  );
  const [test, setTest] = useState("Dictionry");
  const [pho, setPho] = useState("");
  const [audio, setAudio] = useState()

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = res.data[0].meanings[0].definitions[0].definition;
      const test = res.data[0].word;
      console.log(data);
      setAudio(res.data[0].phonetics[0].audio)
      setDefination(data);
      setWord("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setWord(e.target.value);
    setTest(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>{test}</h1>
        <NavLink to="/books">library</NavLink><br />
        {defination}
      </div>

      <input
        className="border-2 border-green-500"
        type="text"
        value={word}
        onChange={handleChange}
      />

      <div>
        <button onClick={handleSearch}>search</button>
         <audio controls>
          <source src={audio} type="audio/ogg" />
        </audio> 
      </div>
    </div>
  );
};