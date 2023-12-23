import { NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <header className="bg-color-nav-bg h-20 w-full flex items-center text-[#333] sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between w-full">
        {/* logo */}
        <div>
          <h1>logo</h1>
        </div>
        {/* links */}
        <div>
          <ul className="flex items-center space-x-7 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className="hover:text-orange-500 transition-colors"
              >
                Pages
              </NavLink>
            </li>
          </ul>
        </div>
        {/* cart icons */}
        <div className="flex items-center space-x-8">
          <Tooltip content="Cart">
            <div className="w-8 h-8 rounded-full p-2 border border-gray-400 flex items-center justify-center text-gray-400 cursor-pointer">
              <BsBag />
            </div>
          </Tooltip>
          <Tooltip content="login">
            <div className="w-8 h-8 rounded-full p-2 border border-gray-400 flex items-center justify-center text-gray-400 cursor-pointer">
              <AiOutlineLogin />
            </div>
          </Tooltip>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
