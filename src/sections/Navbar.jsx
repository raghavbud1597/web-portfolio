
import { navBar } from "../constants";
import Button from "./components/Button";
const Navbar = () => {

  return (
    <nav className="flex items-center justify-between w-full">
      <a href="#">
        <img className="w-[30px] h-[30px]" src={navBar.logo} />
      </a>

      <ul className="lg:flex hidden items-center space-x-5">
        {navBar.navLinks.map((link) => (
          <li key={link} className="text-lg font-medium text-slate-400 px-5">
            <a href={link.id}>{link.title}</a>
          </li>
        ))}
      </ul>
      <Button text="Hire Me" link="mailto:raghavbudhiraja78@gmail.com" />
    </nav>
  );
};

export default Navbar;
