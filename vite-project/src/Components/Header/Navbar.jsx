import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
// import { Bars3Icon } from "@heroicons/react/24/outline"; // Make sure heroicons is installed

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 ">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <a href="#home">
            <span>My Portfolio</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menu ? "block" : "hidden"
          } lg:flex space-x-4 text-gray-900 mx-24 py-2 mt-3 font-semibold md:mt-3 rounded-2xl`}
        >
          <li className="font-bold text-md transition-all duration-300 p-1 md:p-0">
            <a href="#Home">Home</a>
          </li>
          <li className=" font-bold text-md transition-all duration-300 p-1 md:p-0">
            <a href="#About">About</a>
          </li>
          <li className=" font-bold text-md transition-all duration-300 p-1 md:p-0">
            <a href="#Experience">Skills</a>
          </li>
          <li className=" font-bold text-md transition-all duration-300 p-1 md:p-0">
            <a href="#Projects">Projects</a>
          </li>
          <li className=" font-bold text-md transition-all duration-300 p-1 md:p-0">
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* Mobile menu toggle (right side icon) */}
        <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
          {menu ? (
            <RiCloseLine size={30} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={30} onClick={() => setMenu(true)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
