import React from "react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";

// emailjs
// .sendForm(
//   "service_kttmpjc",
//   "template_zxe8mqe",
//   form.current,
//   "j4--gLKWdVb75ZcSm"
// )
// .then(
//   (result) => {
//     console.log(result.text);
//   },
//   (error) => {
//     console.log(error.text);
//   }
// );

export const Feedback = () => {

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  // const showToastMessage = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_kttmpjc",
        "template_zxe8mqe",
        form.current,
        "j4--gLKWdVb75ZcSm"
      );
      toast.success("message sent", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // close after 3 secon
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("failed", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // close after 3 seconds
      });
    }
    // e.target.reset();
  };
  

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
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
              onChange={handleChange}
              value={formData.user_name}
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
              onChange={handleChange}
              value={formData.user_email}
              type="email"
              id="email"
              name="user_email"
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
              onChange={handleChange}
              value={formData.message}
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full bg-[#D9D9D9] px-3 font-normal py-1 md:py-2 placeholder:text-[#696969] focus:border-indigo-500 focus:ring-[1.5px] focus:ring-indigo-400 outline-none transition-colors duration-200 ease-in-out h-32"
            />
          </div>

          <div>
            <Button
              // onSubmit={notify}
              color="#0F9D58"
              value="Send"
              icon={<RiSendPlane2Line />}
              border="none"
            ></Button>
          </div>
        </form>
      </div>
      <button  className="border-red-500 border-2">
        test
      </button>
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
