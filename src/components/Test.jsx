// import React from "react";
// import { useState } from "react";

// export const Test = () => {
//   const [highlight, setHighlight] = useState(false);

//   const handleClick = () => {
//     setHighlight((highlight) => !highlight);
//   };

//   return (
//     <div>
//       <p style={{ color: highlight ? "red" : "green" }}>testing font color</p>
//       <h1 className={highlight ? "text-3xl" : ""}>hello</h1>
//       <button onClick={handleClick} className="border-2">
//         change
//       </button>
//     </div>
//   );
// };
// import React from "react";
// import { useState } from "react";

// export const Test = () => {
//   const [loading, setIsLoading] = useState(false);
//   const [userInputs, setUserInputs] = useState({
//     fName: "",
//     lName: "",
//   });

//   const handleFname = (e) => {
//     setUserInputs((prevState) => {
//       return {
//         ...prevState,
//         fName: e.target.value,
//       };
//     });
//   };
//   const handleLname = (e) => {
//     setUserInputs((prevState) => {
//       return {
//         ...prevState,
//         lName: e.target.value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => {
//       console.log(userInputs.fName);
//       console.log(userInputs.lName);
//       setIsLoading(false)
//     }, 2000);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={userInputs.fName}
//         onChange={handleFname}
//         className="border-2 border-red-500"
//       />
//       <input
//         type="text"
//         value={userInputs.lName}
//         onChange={handleLname}
//         className="border-2 border-red-500"
//       />
//       <button className="border-2 border-green-600">
//         {loading ? "submitting..." : "submit"}
//       </button>
//     </form>
//   );
// };


import React from 'react';
import { useState } from 'react';
import axios from "axios";

export const Test = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      let new_data = []
      const outPut = res.data.map((item) => item.title)
      new_data = [...new_data, ...outPut]
      setData(new_data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}
