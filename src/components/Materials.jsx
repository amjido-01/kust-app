import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Docs } from "./Docs";
import { motion } from "framer-motion";
import { Download } from "./Download";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";


const storage = getStorage();

export const Materials = (props) => {
  const handoutsCollection = collection(db, "handouts"); // address to the particular collection in database
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
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
        console.log(doc.id, " => ", doc.data());
        // new_data = [...new_data, doc.data()];
        new_data = [
          ...new_data,
          { ...doc.data(), fileRef: doc.data().handout },
        ];
      });
      // console.log(response.data)
      console.log("new_data", new_data);
      setData(new_data);
      setFilteredItems(new_data)
      setLoading(false)
      console.log(filteredItems, "i am here")
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
    console.log(searchQuery);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
    console.log(filteredItems, "see me")
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col"
    >
      <Header />

      <div className="container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[2rem] md:mt-[7rem] flex-1">
        <div className="look flex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to the download page
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              Please select either the handout or the past question. Then,{" "}
              <br /> click on the download button to receive it on your device.
            </p>
          </div>

          <h4 className="uppercase bg-[#0F9D58] mb-[8px] w-[15rem] text-[#FFFFFF] rounded border-2 border-[#000000] p-[6px]">
            first semester
          </h4>

          <div className="relative my-3" data-te-input-wrapper-init>
            <input
              value={searchQuery}
              onChange={handleSearch}
              type="search"
              className="peer block min-h-[auto] w-[15rem] rounded border-2 border-green-500 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleSearch2"
            />
            <label
              htmlFor="exampleSearch2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
            >
              Search
            </label>
          </div>

          <div className="container mx-auto">
            <div className="container">
              <div className="let">
                <div
                  style={{ backgroundColor: "#8CB6B5" }}
                  className={`rounded-xl border-2 pb-4 border-[#000000] px-5 w-full box`}
                >
                  <h3
                    style={{ fontStyle: "normal" }}
                    className=" font-bold my-2 text-[14px] md:text-[22px] leading-[21px] md:leading-[33px] capitalize"
                  >
                    HandOuts
                  </h3>
                  {filteredItems.length === 0 && (
                    <p className="mt-10 text-white"> no such file</p>
                  )}
                 {loading ? "loading files" :  <ul className=" uppercase">
                    {filteredItems.map((handout, index) => (
                      <li
                        key={index}
                        style={{ fontStyle: "normal" }}
                        onClick={() =>
                          handleButtonClick(handout.handout, false)
                        }
                        className="bg-white dd cursor-pointer pl-4 text-[15px] my-[10px] font-medium leading-[20px] uppercase text-[#000000] w-full flex justify-between items-center"
                      >
                        {handout.title}
                         {<Download cls_name="bg-[#755FFE] text-[#FFFFFF] text-[15px] p-2 font-medium leading-[24px] uppercase" onSmash={() => {
                          handleButtonClick(handout.handout, true)
                         }}/>}
                      </li>
                    ))}
                  </ul>}
                </div>

                {/* <div
                  style={{ backgroundColor: "#D4ADB7" }}
                  className={` rounded-xl border-2 pb-4 border-[#000000] px-5 w-full`}
                >
                  <h3
                    style={{ fontStyle: "normal" }}
                    className=" font-bold my-2 text-[14px] md:text-[22px] leading-[21px] md:leading-[33px] capitalize"
                  >
                    HandOuts
                  </h3>
                  {filteredItems.length === 0 && (
                    <p className="mt-10 text-white">No such file found :)</p>
                  )}
                  <ul className=" uppercase">
                    {filteredItems.map((item) => (
                      <li
                        key={item.id}
                        style={{ fontStyle: "normal" }}
                        className="bg-white pl-4 cursor-pointer text-[15px] my-[10px] font-medium leading-[20px] uppercase text-[#000000] w-full flex justify-between items-center"
                      >
                        {item.first_name} {<Download />}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </motion.div>
  );
};
