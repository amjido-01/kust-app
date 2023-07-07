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
import { useEffect } from "react";

export const Feedback = () => {
  const form = useRef();
  const [loading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (userInput.userName.trim() === "" || userInput.userEmail.trim() === "") {
      return false;
    }
    setIsLoading(true);
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
      setUserInput({
        userName: "",
        userEmail: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong, try again!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        style: {
          fontSize: "14px",
        },
      });
    }
    setIsLoading(false);
  };

  const handleName = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        userName: e.target.value,
      };
    });
  };

  const handleEmail = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        userEmail: e.target.value,
      };
    });
  };

  const handleMessage = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        message: e.target.value,
      };
    });
  };

  return (
    <div className="">
      <section className="bg-[#FFFFFF] feedback text-gray-600 body-font px-8 md:px-4 ">
        <div className="container md:w-[50%] mt-18 md:mt-[2rem] mb-12 md:mx-52">
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="feedback_form flex flex-col md:ml-aut md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-[#000000] capitalize font-bold text-lg unbounded mb-1 title-font">
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
                value={userInput.userName}
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
                value={userInput.userEmail}
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
                value={userInput.message}
                onChange={handleMessage}
                id="message"
                required
                placeholder="Your Message"
                className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out h-32"
              />
            </div>

            <div>
              <Button
                disabled={loading}
                value="Send"
                icon={<RiSendPlane2Line className="ml-1" />}
                cls_name={
                  loading
                    ? "bg-[#85edba] cursor-not-allowed rounded-[4px] text-sm text-white font-medium py-2 px-5 flex items-center text-center capitalize"
                    : "text-white bg-[#0F9D58] rounded-[4px] flex items-center font-medium text-sm px-5 py-2 text-center capitalize"
                }
              ></Button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};
