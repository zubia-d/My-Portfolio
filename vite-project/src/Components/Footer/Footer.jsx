
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
    <div
      id="Footer"
      className="flex justify-around bg-blue-300 text-black p-10 md:p-12 items-center"
    >
      <div className="w-50% md:text-xl"> 
        <h1 className="text-2xl md:text-4xl font-bold">Contact! </h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl mx-5">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ghulamullahzubia3k@gmail.com
         
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href=" https://www.linkedin.com/in/zubia-ghulamullah-757b85336/" target="_blank">linkedin.com/zubia-ghulamullah</a>
        
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/zubia-d" target="_blank">github.com/zubia-d</a>
          
        </li>
        <li className="flex gap-1 items-center">
          <CiInstagram />
          <a href="https://www.instagram.com/zubiaaaaa_a/" target="_blank">instagram.com/zubiaaaaa_a</a>
        
        </li>
      </ul>
    </div>
    <h3 className="text-center bg-blue-950 text-white">All rights reserved @zubia-ghulamullah </h3>
</div>

  );
};

export default Footer;