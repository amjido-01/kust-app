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


// import React from 'react';
// import { useState } from 'react';
// import axios from "axios";

// export const Test = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       let new_data = []
//       const outPut = res.data.map((item) => item.title)
//       new_data = [...new_data, ...outPut]
//       setData(new_data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div>
//       <button onClick={fetchData}>Get Data</button>
//       <ul>
//         {data.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//   )
// }

import React from 'react';
import { useState } from 'react';

export const Test = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const faculties = ["FACMS", "FAENG", "FASEET"];
  const departments = {
    FACMS: ["Computer", "ICT", "Maths"],
    FAENG: ["Computer", "ICT", "Maths"],
    FASEET: ["Electrical", "Electronic", "Mechanical"],
  };
  const departmentLevels = {
    Computer: ["100", "200", "300", "400", "500"],
    ICT: ["100", "200", "300", "400", "500"],
    Maths: ["100", "200", "300", "400", "500"],
    Electrical: ["100", "200", "300", "400"],
    Electronic: ["100", "200", "300", "400"],
    Mechanical: ["100", "200", "300", "400"],
  };

  const handleFacultyChange = (e) => {
    const selectedFaculty = e.target.value;
    setSelectedFaculty(selectedFaculty);
    setSelectedDepartment("");
    setSelectedLevel("");
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setSelectedDepartment(selectedDepartment);
    setSelectedLevel("");
  };

  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setSelectedLevel(selectedLevel);
  };

  return (
    <div>
      <select value={selectedFaculty} onChange={handleFacultyChange}>
        <option value="">Select Faculty</option>
        {faculties.map((faculty) => (
          <option key={faculty} value={faculty}>{faculty}</option>
        ))}
      </select>

      {selectedFaculty && (
        <select value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {departments[selectedFaculty].map((department) => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      )}

      {selectedDepartment && (
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="">Select Level</option>
          {departmentLevels[selectedDepartment].map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      )}
    </div>
  );
}

