import React, { useState } from "react";
import img1 from "../assets/images/tutoral.png";
import img2 from "../assets/images/hiremepls.png";
import img3 from "../assets/images/project-img3.png";
import darkwing from "../assets/images/darkwing.png";
import hawkeye from "../assets/images/hawkeye.png";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects_soft = [
    {
      id: 1,
      title: "Tutoral.org",
      description:
        "An online tutoring site aimed to connect parents and clients to in-home tutors in many subjects.",
      img: img1,
      link: "https://www.tutoral.org/",
      //   techUsed: [
      //   {
      //     id: 1,
      //     icon: <FaReact />,
      //     name: "React",
      //   },
      //   {
      //     id: 2,
      //     icon: <SiTailwindcss />,
      //     name: "Tailwind CSS",
      //   },
      //   {
      //     id: 3,
      //     icon: <SiFirebase />,
      //     name: "Firebase",
      //   },
      // ],
    },
    {
      id: 2,
      title: "hiremepls",
      description:
        "Need help finding your new job? Join a community of like-minded professionals that can help you find your dream career and ace the interview!",
      img: img2,
      link: "https://hiremepls-rsb9.onrender.com/",
      tech: ["React", "Sass CSS", "MongoDB", "Express.js"],
    },
  ];

  const projects_mech = [
    {
      id: 1,
      title: "DarkWing™ Ka-Band Flat Panel VSAT",
      description:
        "Fast, rugged laptop-sized Ka-Band performance. Quick deployment on new HTS networks with built-in battery and simplified manual pointing, including iDirect Evolution® and Velocity®.",
      img: darkwing,
      link: "https://www.l3harris.com/all-capabilities/darkwing-ka-band-flat-panel-vsat",
    },
    {
      id: 2,
      title: "Hawkeye™ 4 Lite 1.3M Flyaway VSAT",
      description:
        "Hawkeye 4 Lite is a flyaway VSAT with a carbon fiber 1.3M segmented antenna supporting high-speed data and voice for Internet, Video and C5ISR applications.",
      img: hawkeye,
      link: "https://www.l3harris.com/all-capabilities/hawkeye-4-lite-13-meter-flyaway-vsat",
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold mt-14 baskerville">
          Projects
        </h1>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#1a67b3,#38097a)]" : ""
            }`}
          >
            Software
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#1a67b3,#38097a)]" : ""
            }  `}
          >
            Mechanical
          </button>
          {/* <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects_soft.map((item, i) => (
                <ProjectCard key={i} item={item} />
              ))
            : null}
        </div>
        <div className="grid grid-cols-3 p-10 -mt-[80px] justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 2
            ? projects_mech.map((item, i) => (
                <ProjectCard key={i} item={item} />
              ))
            : null}
        </div>
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
