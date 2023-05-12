import bg from "../assets/images/banner-bg.png";
import portrait from "../assets/images/portrait.jpg";

function About() {
  return (
    <>
      <div
        id="about"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4 "
      >
        <div className="skills-wrapper text-center text-white bg-[#171717] bg-opacity-60  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl baskerville ">About Me</h1>
          <div className="flex flex-row justify-between items-center w-11/12 mx-auto">
            <div className="flex justify-start items-center text-left w-[50%]">
              <p className="robotoslab text-lg py-3 leading-8 ">
                I'm Mena, a mechanical engineer with experience in product
                design, development, and optimization. I've worked for companies
                like L3Harris Technologies, GE Aviation, and 21st Century Group,
                gaining skills in 3D printing, assembly, and software like
                Solidworks and Matlab.
                <br /> <br />I enjoy problem-solving and finding creative
                solutions that optimize manufacturing methods and reduce costs.
                My achievements include leading the winning design for the
                DarkWing Flat Panel VSAT articulation, resulting in a successful
                $2.1 million contract. I'm eager to learn and bring my skills to
                new challenges. Thanks for visiting my website!
              </p>
            </div>
            <div className="about-picture w-1/3 ml-10">
              <img className="rounded-full w-full" src={portrait} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// &nbsp; &nbsp;&nbsp; &nbsp;Hello there! My name is Mena, and I'm
//                 a mechanical engineer with experience in product design,
//                 development, and optimization. I've worked for companies such as
//                 L3Harris Technologies, GE Aviation, and 21st Century Group,
//                 where I've gained valuable skills in 3D printing, assembly,
//                 soldering, and software such as Autodesk Inventor, Solidworks,
//                 ANSYS, Matlab, Node.js, Python, JAVA, LaTeX, VBS, and Microsoft
//                 Office.
//                 <br />
//                 <br />
//                 &nbsp; &nbsp;&nbsp; &nbsp; Throughout my career, I've worked on
//                 a variety of projects, from designing and building test fixtures
//                 to automating switch testing using Arduino and Java. I take
//                 great pride in my ability to approach problems from different
//                 angles and find creative solutions that optimize manufacturing
//                 methods and reduce overall costs. One of my proudest
//                 achievements was leading the winning design for the DarkWing
//                 Flat Panel VSAT articulation through consolidation of parts,
//                 which resulted in a successful bid for a $2.1 million contract.
//                 <br />
//                 <br />
//                 &nbsp; &nbsp;&nbsp; &nbsp; Overall, I'm a curious and driven
//                 individual who is always eager to learn and grow. I'm excited to
//                 bring my skills and experience to new challenges and to help
//                 drive innovation and success for your company. Thank you for
//                 visiting my personal website, and I look forward to connecting
//                 with you soon!
