import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { HandoutsList } from "./HandoutsList";
import InputSearch from "./InputSearch";

export const Materials = (props) => {
  const handoutsCollection = collection(db, "handouts"); // address to the particular collection in database
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [handoutsLists, setHandoutsLists] = useState([]);
  const [pastQuestionLists, setPastQuestionLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDataLoading(true);
      const response = await getDocs(handoutsCollection);
      const q = query(
        handoutsCollection,
        where("department", "==", props.department),
        where("level", "==", props.level)
      );
      let new_data = [];
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // new_data = [...new_data, doc.data()];
        new_data = [
          ...new_data,
          { ...doc.data(), fileRef: doc.data().handout },
        ];
      });
      if (new_data.length === 0) {
        setMessage("no file yet");
      }
      setData(new_data);
      // console.log(data);
      setFilteredItems(new_data);
      // console.log(filteredItems.filter((item, index) => item.type === "Past question"), "from here")
      setMessage(new_data.length === 0 ? "no file yet" : "");
      setDataLoading(false);
      const filteredPastQuestionList = data.filter(
        (item) => item.type === "Past question"
      );
      // console.log(filteredPastQuestionList, "dance");
      const filteredHandoutLists = data.filter(
        (item) => item.type === "Handout"
      );
      // console.log(filteredHandoutLists, "hope to see y");
      setHandoutsLists(filteredHandoutLists);
      setPastQuestionLists(filteredPastQuestionList);
      // console.log(pastQuestionLists, "checking");
      // console.log(handoutsLists, "bye");
      // console.log(pastQuestionLists, "kkk")
    };

    fetchData();
  }, []);

  const handleButtonClick = (fileRef, shouldDownload) => {
    // const fileRef = handoutsCollection; // Replace with the actual file reference
    if (shouldDownload) {
      // Trigger file download
      window.open(fileRef, "_blank");
    } else {
      // Open file in new tab
      props.openPDFInNewTab(fileRef);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
    // console.log(filteredItems, "goodbye");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container w-[85%] md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[3.8rem] md:mt-[7rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase font-semibold text-[20px] md:mt-2 mt-[2rem] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to {props.department} sci, level {props.level} download
              page
            </h1>
            <p className="capitalize text-justify font-medium text-[14px] md:text-[16px] leading-[18px] md:leading-[28px]">
              Please select either the handout or the past question. Then, click
              on the download button to receive it on your device.
            </p>
          </div>

          <div className=" flex justify-between mb-4 items-center">
            <h4 className="uppercase bg-[#0F9D58] text-center w-[10.5rem] text-[#FFFFFF] rounded border-2 border-[#000000] p-3">
              first semester
            </h4>
            <div className="relative my-3" data-te-input-wrapper-init>

              <InputSearch value={searchQuery} onChange={handleSearch} />
            </div>
          </div>

          <div className="container mx-auto">
            <div className="container">
              <div className="let">
                <HandoutsList
                  filteredItems={filteredItems.filter(
                    (item) =>
                      (item.type === "Handout") &
                      (item.sms === "First semester")
                  )}
                  dataLoading={dataLoading}
                  bg="#8CB6B5"
                  title="Handouts"
                  handleButtonClick={handleButtonClick}
                  searchQuery={searchQuery}
                  handleSearch={handleSearch}
                />
                <HandoutsList
                  filteredItems={filteredItems.filter(
                    (item) =>
                      (item.type === "Past question") &
                      (item.sms === "First semester")
                  )}
                  dataLoading={dataLoading}
                  bg="#D4ADB7"
                  title="Past Questions"
                  mb="20px"
                  handleButtonClick={handleSearch}
                />
              </div>
            </div>

            {/* <div className="container">
              <h4 className="uppercase my-6 bg-[#0F9D58] text-center w-[11rem] text-[#FFFFFF] rounded border-2 border-[#000000] p-3">
                second semester
              </h4>
              <div className="let">
                <HandoutsList
                  filteredItems={filteredItems.filter(
                    (item) =>
                      (item.type === "Handout") &
                      (item.sms === "Second semester")
                  )}
                  dataLoading={dataLoading}
                  bg="#8CB6B5"
                  title="Handouts"
                  handleButtonClick={handleButtonClick}
                  searchQuery={searchQuery}
                  handleSearch={handleSearch}
                />
                <HandoutsList
                  filteredItems={filteredItems.filter(
                    (item) =>
                      (item.type === "Past question") &
                      (item.sms === "Second semester")
                  )}
                  dataLoading={dataLoading}
                  bg="#D4ADB7"
                  title="Past Questions"
                  mb="20px"
                  handleButtonClick={handleSearch}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
