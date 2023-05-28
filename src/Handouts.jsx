import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";

export const Handouts = () => {
  const handoutsCollection = collection(db, "handouts"); // address to the particular collection in database
  const [data, setData] = useState([]); // to store the qqueried response
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDocs(handoutsCollection);
      // const response = await query(handoutsCollection, where("department", "==", "comp"));
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
        {data.map((handout, index) => {
          return (
            <li key={index}>
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
