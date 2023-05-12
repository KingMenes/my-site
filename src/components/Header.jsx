import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center drop-shadow-xl bg-black bg-opacity-10 p-4 rounded-xl">
            <h1 className="text-white text-5xl font-bold drop-shadow-xl mb-3">
              Hi 👋, I'm Mena.
            </h1>
            <p className="text-white max-w-lg text-3xl drop-shadow-xl">
              <span className="mr-1">I am</span>
              <TypeAnimation
                sequence={[
                  " a Builder 👷‍♂️.",
                  2000,
                  " an Engineer 🛠️.",
                  2000,
                  " a Developer 💻.",
                  2000,
                  " an Innovator 🦾.",
                  2000,
                  " a Friend 😃.",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                deletionSpeed={70}
                className="type-animation"
              />
              <br />
              <p className="text-lg leading-7 mt-3">
                Engineering solutions in hardware and code. I'm passionate about
                innovation and excellence, pushing boundaries to create a better
                future.
              </p>
            </p>
            <div className=" flex flex-row w-full justify-between">
              <button className="drop-shadow-md font-bold text-white p-4 rounded-xl w-3/4 mt-3 text-lg hover:scale-110 transition-all mr-3 border border-white bg-black bg-opacity-50">
                <a
                  href="https://www.linkedin.com/in/mibrahim777/"
                  target="_blank"
                >
                  Let's Connect!{" "}
                </a>
              </button>
              <button className="drop-shadow-md border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#1a67b3,#38097a)] p-4 rounded-xl w-3/4 mt-3 text-lg hover:scale-110 transition-all">
                <a href="resume.pdf" target="_blank">
                  View Resume
                  <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
