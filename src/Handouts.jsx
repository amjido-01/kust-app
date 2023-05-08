import { storage } from "./Firebase";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export const Handouts = () => {
  const handoutsCollection = collection(db, "handouts");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHandouts = async () => {
      let response = await getDocs(handoutsCollection);

    let new_data = [];
    response.docs.map((doc) => {
    return (old) => [...new_data, doc.data()];
   });
   setData(() => new_data);
    };
    getHandouts();
    console.log(data);
  }, [getHandouts]);

  return (
    <div>
      <button>Get Handouts</button>
      <div>
        {data.map((handout) => {
          <div>
            <h1>{handout.title}</h1>
            <p>{handout.department}</p>
          </div>;
        })}
      </div>
    </div>
  );
};
