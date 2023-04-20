import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { Data } from "../Data";
import { Link } from "react-router-dom";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";

export const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(Data);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    console.log(searchQuery);

    const filtered = Data.filter((item) =>
      item.first_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <Header />

      <div className="container w-full p-4 md:p-0 md:w-[73%] md:mb-14 mx-auto mt-[5rem] md:mt-[10rem] flex-1">
        <div className="lookflex flex-col justify-center">
          <div className="text-[#000000] mb-4 md:mb-7">
            <h1
              style={{ fontFamily: "poppins" }}
              className="uppercase my-2 font-semibold text-[20px] md:text-[32px] leading-[31px] md:leading-[49px]"
            >
              welcome to the document page
            </h1>
            <p className="capitalize font-medium text-[15px] md:text-[18px] leading-[18px] md:leading-[28px]">
              choose your faculty and click/tap to proceed.
            </p>
          </div>

          <div className="container border-[3px] border-[#000000] rounded-[30px] bg-[#B0F2B4] mx-auto">
            <div className="container">
              <h1
                style={{ fontFamily: "poppins" }}
                className="md:text-center px-8 pt-4 uppercase text-[17px] font-semibold leading-[26px] md:text-[28px] md:pt-5 md:font-medium"
              >
                FACULTIES
              </h1>
              {/* <input
              type="text"
              className="border-2 border-green-500"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="search"
            /> */}

              <div className="pb-[20px] pt-1 pl-6 md:px-8 md:py-[50px] flex flex-col md:flex-row md:items-center md:justify-center">
                <div className="w-[100%] flex justify-center items-center mx-auto md:w-[45%]">
                    <ul className=" list-disc">
                      <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                        <Link to="facms">
                          FACULTY OF COMPUTING AND MATHEMATICAL SCIENCE (FACMS)
                        </Link>
                      </li>
                      <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                        <Link to="engineering">FACULTY OF ENGINEERING</Link>
                      </li>
                      <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                        <Link to="">FACULTY OF SCIENCES</Link>
                      </li>
                    </ul>
                </div>


                <img
        src={one}
        className="absolute top-[45%] md:top-16 w-[23px] md:w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={two}
        className="absolute -bottom-[12%] left-10 md:left-[30%] w-[25px] md:w-[60px]"
        alt=""
        srcset=""
      />
      <img
        src={three}
        className="absolute top-[60%] w-[30px]"
        alt=""
        srcset=""
      />
      <img
        src={four}
        className="absolute right-0 w-[20px] md:right-0 md:top-0 md:w-[20px]"
        alt=""
        srcset=""
      />
      <img
        src={five}
        className="absolute right-[25%] md:top-[10%] top-[15%] w-[24px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={six}
        className="absolute right-0 top-[70%] w-[30px] md:w-[40px]"
        alt=""
        srcset=""
      />
      <img
        src={seven}
        className="absolute right-0 md:left-[45%] top-[40%] w-[25px] md:w-[35px]"
        alt=""
        srcset=""
      />


                <div className="w-[100%] flex justify-center items-center mx-auto md:w-[45%]">
                  <ul className=" list-disc">
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                      <Link to="">
                        FACULTY OF AGRICULTURE & AGRICULTURAL TECH
                      </Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                      <Link to="">
                        FACULTY OF SCIENCE EDUCATION
                      </Link>
                    </li>
                    <li className="md:px-0.5 py-[4px] md:py-1 text-[18.5px] font-medium md:text-[18px] leading-[27px] text-[#1F1F1F] md:font-normal">
                      <Link to="">
                        FACULTY OF EARTH & ENVIRONMENTAL SCI
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer className="w-full" />
      </div>
    </section>
  );
};
