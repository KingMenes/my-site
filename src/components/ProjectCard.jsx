import React from "react";

function ProjectCard({ item }) {
  // const listTech = item.techUsed.map((tech) => (
  //   <div className="techspan">
  //     {tech}
  //   </div>
  // ));
  return (
    <>
      <a href={item.link} target="_blank">
        <div className="img-box w-[700px] h-[300px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl bg-[#1a67b3] bg-opacity-5">
          <img
            src={item.img}
            alt=""
            className="object-cover min-w-full min-h-full"
          />
          <div className="p flex flex-col justify-center items-center absolute top-[-100%] left-0 h-full w-full text-center bg-[#1a67b3] bg-opacity-80 p-4">
            <h1 className="font-bold text-3xl">{item.title}</h1>
            <p className="font-bold">{item.description}</p>
            {/* <div className="techdiv">{listTech}</div> */}
          </div>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
