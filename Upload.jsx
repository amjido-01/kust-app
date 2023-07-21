import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./src/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { AuthForm } from "./src/components/AuthForm";
import { useRef } from "react";
import { useEffect } from "react";
import { Data } from "./src/Data";
import Swal from "sweetalert2";
import swal from "sweetalert";

export const Upload = (props) => {
  const [percent, setPercent] = useState(0);

  // ============================================================
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  // ==========================================================

  const [error, setError] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectSemester, setSelectSemester] = useState("");
  const [uploadStatus, setUploadStatue] = useState(null)



  // comment this code =======
  const [credentials, setCredentials] = useState({
    email: "youndsadeeq10@gmail.com",
    password: "123456",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // ==============

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
  const types = ["Handout", "Past question"];
  const sms = ["First semester", "Second semester"];

  const handleFacultyChange = (e) => {
    const selectedFaculty = e.target.value;
    setSelectedFaculty(selectedFaculty);
    setSelectedDepartment("");
    setSelectedLevel("");
    setSelectedType("");
    setSelectSemester("");
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setSelectedDepartment(selectedDepartment);
    setSelectedLevel("");
    setSelectedType("");
    setSelectSemester("");
  };

  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setSelectedLevel(selectedLevel);
    setSelectedType("");
    setSelectSemester("");
  };

  const handleSemester = (e) => {
    const selectedSemester = e.target.value;
    setSelectSemester(selectedSemester);
    selectedType("");
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);
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

  // comment this code =====================
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
  // ======================================

const handleFileUpload = () => {
  const uploadSuccessful = true;

  if (uploadSuccessful) {
    setUploadStatue("success")
  } else {
    setUploadStatue("fail")
  }
}

useEffect(() => {
  if (uploadStatus === "success") {
    Swal.fire({
      title: 'Hello!',
      text: 'This is a SweetAlert dialog.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } else if (uploadStatus === "fail") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}, [uploadStatus])

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
        handleFileUpload()
      },
      (error) => {
        console.log(error);
        handleUploadFile()
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          let handoutDoc = collection(db, "handouts");
          addDoc(handoutDoc, {
            department: selectedDepartment,
            faculty: selectedFaculty,
            handout: url,
            level: selectedLevel,
            type: selectedType,
            sms: selectSemester,
            title: handout.name,
          });
        });
      }
    );
    inputRef.current.value = null;
    setSelectedFaculty("");
    setSelectedDepartment("");
    setSelectedLevel("");
    setSelectedType("");
    console.log("Selected Faculty:", selectedFaculty);
    console.log("Selected Department:", selectedDepartment);
    console.log("Selected Level:", selectedLevel);
    console.log("selectedType:", selectedType);
  };
  return (
    <section className="">
      <div className="flex border-2 items-center justify-center hh">
        {/* comment this code ==============================*/}
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
        {/* ========================================================== */}

        {/* this ========== */}
        {isAuthenticated ? (
          // ============================

          <div className=" contribute md:w-[40%] bg-[#eee]">
            <div className="">
              <h1>Contribute</h1>

              <div className="mx-auto">
                <select
                  className=""
                  value={selectedFaculty}
                  onChange={handleFacultyChange}
                >
                  <option value="" className="">
                    Select Faculty
                  </option>
                  {faculties.map((faculty) => (
                    <option key={faculty} value={faculty}>
                      {faculty}
                    </option>
                  ))}
                </select>
                <br />
                <br />
                {/* this also  ====================================== */}
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
                {/* ======================================================= */}
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
                {/* this also ========================================== */}
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
                {/* ============================================================ */}
                <select value={selectedLevel} onChange={handleLevelChange}>
                  <option value="">Select Level</option>
                  {selectedDepartment &&
                    departmentLevels[selectedDepartment].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
                <br />
                <br /> {/* here */}
                <select value={selectSemester} onChange={handleSemester}>
                  <option value="">Select Semester</option>
                  {selectedLevel &&
                    sms.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
                <br />
                <br />
                <select value={selectedType} onChange={handleTypeChange}>
                  <option value="">Select Type</option>
                  {selectSemester &&
                    types.map((type, index) => (
                      <option value={type} key={index}>
                        {type}
                      </option>
                    ))}
                </select>
                <br />
                <br />
                <input
                  ref={inputRef}
                  type="file"
                  required
                  onChange={(e) => uploadHandout(e)}
                  disabled={inputDisabled}
                  class="file relative justify-between m-0 block w-full min-w-0 border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                />
                <p className="mt-2 text-center">{percent}% uploaded</p>
              </div>

              {/* <br/>
                <br/> */}
            </div>
          </div>
        ) : (
          // this also =================================================
          <p style={{ color: "red" }} className="text-red-500 text-4xl">
            {error}
          </p>
        )}
        {/* ======================================================================== */}
      </div>
    </section>
  );
};
