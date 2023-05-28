import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./src/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { AuthForm } from "./src/components/AuthForm";
import { useRef } from "react";

export const Upload = (props) => {
  const [percent, setPercent] = useState(0);
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [dept, setDept] = useState("");
  const [faculty, setFaculty] = useState("");
  const [level, setLevel] = useState("");
  const [credentials, setCredentials] = useState({
    email: "youndsadeeq10@gmail.com",
    password: "123456",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputRef = useRef(null);

  const handleDept = (e) => {
    setDept(e.target.value);
    // console.log(e.target.value);
  };
  const handleFaculty = (e) => {
    setFaculty(e.target.value);
    // console.log(e.target.value);
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
    // console.log(e.target.value);
  };

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
            department: dept,
            faculty: faculty,
            handout: url,
            level: level,
            title: handout.name,
          });
        });
      }
    );
    setDept("")
    setFaculty("")
    setLevel("")
    inputRef.current.value = null;

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
            <label htmlFor="dept">Department</label>
            <input
              style={{ border: "2px solid green" }}
              value={dept}
              onChange={handleDept}
              type="text"
              id="dept"
              className="border-2 border-blue-500"
            />
          </div>
          <br />

          <div>
            <label htmlFor="faculty">Faculty</label>
            <input
              style={{ border: "2px solid green" }}
              value={faculty}
              onChange={handleFaculty}
              type="text"
              id="faculty"
            />
          </div>
          <br />

          <div>
            <label htmlFor="level">Level</label>
            <input
              style={{ border: "2px solid green" }}
              value={level}
              onChange={handleLevel}
              type="text"
              id="level"
            />
          </div>
          <br />

          <input ref={inputRef}  type="file" required onChange={(e) => uploadHandout(e)} />
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
