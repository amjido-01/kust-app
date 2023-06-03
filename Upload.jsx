import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./src/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { AuthForm } from "./src/components/AuthForm";
import { useRef } from "react";
import { useEffect } from "react";
import { Data } from "./src/Data";

export const Upload = (props) => {
  const [percent, setPercent] = useState(0);
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [credentials, setCredentials] = useState({
    email: "youndsadeeq10@gmail.com",
    password: "123456",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // updating the input file field to null after submissinon
  const inputRef = useRef(null);

  const faculties = Data[0].faculties;
  const departments = {
    FACMS: ["Computer", "ICT", "Maths"],
    FAENG: ["Electrical", "Electronic", "Mechanical"],
    FASEET: ["Testing", "Checking", "Working"],
  };
  const departmentLevels = {
    Computer: ["100", "200", "300", "400"],
    ICT: ["100", "200", "300", "400", "500"],
    Maths: ["100", "200", "300", "400"],
    Electrical: ["100", "200", "300", "400", "500"],
    Electronic: ["100", "200", "300", "400", "500"],
    Mechanical: ["100", "200", "300", "400", "500"],
    Testing: ["100", "200", "300", "400", "500"],
    Checking: ["100", "200", "300", "400", "500"],
    Working: ["100", "200", "300", "400", "500"],
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

  useEffect(() => {
    // Check if all required values are selected
    if (selectedFaculty && selectedDepartment && selectedLevel) {
      setInputDisabled(false); // Enable input field
    } else {
      setInputDisabled(true); // Disable input field
    }
  }, [selectedFaculty, selectedDepartment, selectedLevel]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      user.email === credentials.email &&
      user.password === credentials.password
    ) {
      setDisabled(false);
      setISAuthenticated(true);
      setShowForm(false);
      setUser({
        email: "",
        password: "",
      });
      return;
    }
    setError("please provide your credentials");
  };

  const handleUserEmail = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  };

  const handleUserPassword = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  };

  const uploadHandout = (e) => {
    console.log("called");
    const handout = e.target.files[0];
    const handoutRef = ref(storage, `handouts/${handout.name}`);
    console.log(e.target.files[0], handout.name);
    const uploadTask = uploadBytesResumable(handoutRef, handout);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(
          "snapshot.bytesTransferred ",
          snapshot.bytesTransferred,
          snapshot.totalBytes
        );
        let percentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(() => percentage);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          let handoutDoc = collection(db, "handouts");
          addDoc(handoutDoc, {
            department: selectedDepartment,
            faculty: selectedFaculty,
            handout: url,
            level: selectedLevel,
            title: handout.name,
          });
        });
      }
    );
    inputRef.current.value = null;
    setSelectedFaculty("");
    setSelectedDepartment("");
    setSelectedLevel("");
    console.log("Selected Faculty:", selectedFaculty);
    console.log("Selected Department:", selectedDepartment);
    console.log("Selected Level:", selectedLevel);
  };
  return (
    <div>
      <div className="border-2 border-red-400">
        {showForm ? (
          <form
            className="border-2 border-red-400"
            onSubmit={formSubmitHandler}
          >
            <input
              type="email"
              value={user.email}
              onChange={handleUserEmail}
              className="border-2 border-green-500"
            />
            <br />
            <br />
            <input
              type="password"
              value={user.password}
              onChange={handleUserPassword}
              className="border-2 border-green-500"
            />
            <button className="text-red-500 border-2">submit</button>
          </form>
        ) : (
          ""
        )}
      </div>

      {isAuthenticated ? (
        <div className="border-2 border-red-400">
          <div>
            <select value={selectedFaculty} onChange={handleFacultyChange}>
              <option value="">Select Faculty</option>
              {faculties.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
            <br />
            <br />

            {/* {selectedFaculty && (
              <select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
              >
                <option value="">Select Department</option>
                {departments[selectedFaculty].map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            )} */}
            <select
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              {selectedFaculty &&
                departments[selectedFaculty].map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
            </select>

            <br />
            <br />
            {/* {selectedDepartment && (
              <select value={selectedLevel} onChange={handleLevelChange}>
                <option value="">Select Level</option>
                {departmentLevels[selectedDepartment].map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            )} */}
            <select value={selectedLevel} onChange={handleLevelChange}>
              <option value="">Select Level</option>
              {selectedDepartment && departmentLevels[selectedDepartment].map((item, index) => <option key={index} value={item
              }>{item}</option>)}
            </select>
          </div>
          {/* <br/>
                <br/> */}
          <input
            ref={inputRef}
            type="file"
            required
            onChange={(e) => uploadHandout(e)}
            disabled={inputDisabled}
          />
          <p>{percent} uploaded</p>
        </div>
      ) : (
        <p style={{ color: "red" }} className="text-red-500 text-4xl">
          {error}
        </p>
      )}
    </div>
  );
};
