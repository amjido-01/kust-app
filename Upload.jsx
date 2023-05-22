import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./src/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";

export const Upload = () => {
  const [percent, setPercent] = useState(0);
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(true)
  const [credentials, setCredentials] = useState({
    email: "youndsadeeq10@gmail.com",
    password: "123456",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      user.email === credentials.email &&
      user.password === credentials.password
    ) {
      setISAuthenticated(true);
      setShowForm(false)
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
            department: "comp",
            faculty: "facoms",
            handout: url,
            level: "100",
            title: handout.name,
          });
        });
      }
    );
  };
  return (
    <div>
      <div className="border-2">
        {showForm ? <form onSubmit={formSubmitHandler}>
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
        </form> : ""}
      </div>

      {isAuthenticated ? (
        <div>
          <input type="file" required onChange={(e) => uploadHandout(e)} />
          <p>{percent} uploaded</p>
        </div>
      ) : (
        <p style={{color: "red"}} className="text-red-500 text-4xl">{error}</p>
      )}
    </div>
  );
};
