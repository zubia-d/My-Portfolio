
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Software Engineer 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Software Engineering Second Year Student in Sindh Madarrestul Islam University  with a passion for creating innovative solutions. I have built basic foundation in
                  programming languages, scripting Language, Database Administration and software development methodologies.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Front-End developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in using frameworks like React to build responsive and user-friendly web applications. I am passionate about creating visually appealing and functional user interfaces.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 React developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Recently, I'm Building Strong foundation in React, including state management, component lifecycle, and hooks. I am proficient in building reusable components and managing application state effectively. I am passionate about creating dynamic and interactive user experiences using React.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;