import React from "react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";
import { useRef } from "react";
// import {emailjs} from "@emailjs/browser";
// import emailjs from '@emailjs/browser';
import emailjs from "@emailjs/browser";

export const Feedback = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kttmpjc",
        "template_zxe8mqe",
        form.current,
        "j4--gLKWdVb75ZcSm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-[#FFFFFF] feedback text-gray-600 body-font relative px-8 md:px-4 ">
      <div className="container md:w-[70%] mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-[45%] flex flex-col md:ml-aut md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-[#000000] capitalize font-bold text-lg mb-1 title-font">
            want to say something
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-[#000000] font-normal"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-[#000000] font-normal"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-[#000000] font-normal">Message</label>
            <textarea name="message" />
            <input type="submit" id value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

{
  /* <form ref={form} className="w-full md:w-[45%] flex flex-col md:ml-aut md:py-8 mt-8 md:mt-0">
<h2 className="text-[#000000] capitalize font-bold text-lg mb-1 title-font">
  want to say something
</h2>

<div className="mb-4">
  <label
    htmlFor="name"
    className="leading-7 text-sm text-[#000000] font-normal"
  >
    Email
  </label>
  <input
    type="text"
    id="name"
    name="user_email"
    className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
    placeholder="example@gmail.com"
  />
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
    name="user_name"
    placeholder="Joe Doe"
    className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
  />
</div>
<div className="relative mb-4">
  <label
    htmlFor="message"
    className="leading-7 text-sm text-[#000000] font-normal"
  >
    Message
  </label>
  <textarea
    id="message"
    name="message"
    placeholder="Your Message"
    className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out h-32"
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
</form> */
}
