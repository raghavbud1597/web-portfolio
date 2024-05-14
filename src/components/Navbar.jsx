import { useState } from "react";
import { navLinks } from "../constants";
import { code } from "../assets";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full">
      <a href="#">
        <img className="w-[30px] h-[30px]" src={code} />
      </a>

      <ul className="lg:flex hidden items-center space-x-5">
        {navLinks.map((link) => (
          <li key={link} className="text-lg font-medium text-slate-400 px-5">
            <a href={link.id}>{link.title}</a>
          </li>
        ))}
      </ul>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
