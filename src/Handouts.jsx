import { storage } from "./firebase";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export const Handouts = () => {
  const handoutsCollection = collection(db, "handouts"); // address to the particular collection in database
  const [data, setData] = useState([]); // to store the qqueried response

  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomChars = Math.random().toString(36).substr(2, 5); // Generate random characters
  const randomId = timestamp + randomChars; // Combine timestamp and random characters
  console.log(randomId)
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDocs(handoutsCollection);
      console.log(response.data)
      let new_data = [];
      response.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        console.log(doc.id, " => ", doc.data());
        new_data = [...new_data, doc.data()];
      });
      console.log("new_data", new_data);
      setData(new_data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button>Get Handouts</button>
      <ul>
        {data.map((handout) => {
          return (
            <li key={randomId}>
              <h1>{handout.title} bala</h1>
              <p>{handout.level}</p>
              <a href={handout.handout}>Handout</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
