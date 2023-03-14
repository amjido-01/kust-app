import React from "react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";

export const Feedback = () => {
  return (
    <section className="bg-[#FFFFFF] text-gray-600 body-font relative border-4 border-green-600 min-h-[200px] px-8 md:px-4 ">
      <div className="container border-2 md:w-[70%] mx-auto">
        <div className="w-full md:w-[45%] flex flex-col md:ml-aut md:py-8 mt-8 md:mt-0">
          <h2 className="text-[#000000] capitalize font-bold text-lg mb-1 title-font">
            want to say something
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[#D9D9D9] px-3 font-normal py-1 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
              placeholder="example@gmail.com"
            />
            {/* focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200 ease-in-out */}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 font-normal text-sm text-[#000000]"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Joe Doe"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div>
            <Button
              color="#0F9D58"
              value="Send"
              icon={<RiSendPlane2Line />}
              border="none"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};
