import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML", description: "Building the structure of web pages using semantic HTML5 elements." },
  { icon: <FaCss3Alt color="#2965f1" size={50} />, name: "CSS", description: "Styling websites with modern layouts, animations, and responsive design." },
  { icon: <IoLogoJavascript color="#f7df1e" size={50} />, name: "JavaScript", description: "Making web pages interactive with DOM manipulation and ES6+ features." },
  { icon: <RiTailwindCssFill color="#38bdf8" size={50} />, name: "Tailwind CSS", description: "Utility-first CSS framework for building modern responsive designs quickly." },
  { icon: <FaBootstrap color="#7952b3" size={50} />, name: "Bootstrap", description: "Responsive CSS framework with prebuilt components for faster development." },
  { icon: <FaReact color="#61DBFB" size={50} />, name: "React", description: "Building dynamic and fast single-page applications with reusable components." },
  { icon: <TbBrandCpp color="#00599C" size={50} />, name: "C++", description: "Programming with object-oriented concepts and efficient algorithms." },
  { icon: <DiMysql color="#00758F" size={50} />, name: "MySQL", description: "Designing and managing relational databases for web applications." },
  { icon: <FaGitAlt color="#f1502f" size={50} />, name: "Git", description: "Version control for tracking changes and collaborating on projects." },
  { icon: <FaGithub color="#181717" size={50} />, name: "GitHub", description: "Hosting and managing Git repositories in the cloud." }
];

const Skills = () => {
  return (
    <div id="Experience" className="p-6 sm:p-10 md:p-16 lg:p-24 bg-blue-400 rounded-lg max-w-7xl mx-auto my-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-8 text-center md:text-left">
        My Skills
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-3 bg-zinc-700 rounded-2xl flex items-center justify-center">
              {skill.icon}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-black">{skill.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
