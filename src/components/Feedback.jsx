import React from "react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Feedback = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (userName.trim() === "" || userEmail.trim() === "") {
      return false;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_ID
      );
      toast.success("message sent, \n will get back to you!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        style: {
          fontSize: "14px",
        },
      });
      setUserName("");
      setMessage("");
      setUserEmail("");
    } catch (error) {
      toast.error("something went wrong, try again!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        style: {
          fontSize: "14px",
        },
      });
    }
  };

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="">
      <section className="bg-[#FFFFFF] feedback text-gray-600 body-font px-8 md:px-4 ">
        <div className="container md:w-[70%] mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-[45%] flex flex-col md:ml-aut md:py-8 mt-8 md:mt-0"
          >
            <h2
              data-aos="fade-down"
              className="text-[#000000] capitalize font-bold text-lg mb-1 title-font"
            >
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
                name="user_name"
                value={userName}
                onChange={handleName}
                id="name"
                placeholder="Tanimu Bala"
                required
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
                name="user_email"
                value={userEmail}
                onChange={handleEmail}
                id="email"
                placeholder="example@gmail.com"
                required
                className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-[#000000] font-normal"
              >
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={handleMessage}
                id="message"
                required
                placeholder="Your Message"
                className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out h-32"
              />
            </div>

            <div>
              <Button
                color="#0F9D58"
                hoverColor="red"
                value="Send"
                cls_name="text-white  hover:bg-red-400 flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
                icon={<RiSendPlane2Line className="ml-1" />}
                border="none"
              ></Button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};
