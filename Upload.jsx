import { ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "./src/firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";

export const Upload = () => {
  const [percent, setPercent] = useState(0);

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
      <input type="file" required onChange={(e) => uploadHandout(e)} />
      <p>{percent} uploaded</p>
    </div>
  );
};
