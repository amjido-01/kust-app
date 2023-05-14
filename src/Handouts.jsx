import { storage } from "./Firebase";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";

export const Handouts = () => {
  const handoutsCollection = collection(db, "handouts");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDocs(handoutsCollection);
      let new_data = [];
      response.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const url = getUrl(doc.data().handout);
        new_data = [...new_data, { ...doc.data(), url:url }];
        console.log(url, "new");
      });
      console.log(new_data);
      setData(new_data);
    };

    fetchData();
  }, []);

  const getUrl = async (url) => {
    //get download url
    const handoutRef = ref(storage, `handouts/${url}`);
    return getDownloadURL(handoutRef).then((url) => {
      console.log(url);
      return url;
    });
  };
  return (
    <div>
      <button>Get Handouts</button>
      <div>
        {data.map((handout) => {
          return (
            <>
              <h1>{handout.title} bala</h1>
              <p>{handout.level}</p>
              {/* <a href={handout.url}>Handout</a> */}
            </>
          );
        })}
      </div>
    </div>
  );
};
