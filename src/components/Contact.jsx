import img from "../assets/images/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9tcj1j",
        "template_h90cm6e",
        form.current,
        "rNVWcymp5erghk_1o"
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
    <>
      <div
        className="contact bg-[linear-gradient(90deg,#1a67b3,#38097a);] w-full"
        id="contact"
      >
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form
              action=""
              className="flex flex-col "
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex gap-4 py-2  ">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                  type="text"
                  placeholder="Name"
                  name="from_name"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="text"
                  placeholder="Last Name"
                  name="from_lastname"
                />
              </div>
              <div className="flex gap-4  py-4  ">
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
