import { useState } from "react";
import aashish from "../../public/aashish.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
    
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <div className="flex space-x-2 items-center">
            <img src={aashish} className="h-12 w-12 rounded-full" alt="Profile" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Aashis<span className="text-green-500 text-2xl">h</span>
              </h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  to={text.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="bg-white md:hidden">
            <ul className="flex flex-col h-screen items-center justify-center space-y-6 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    to={text.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    // activeClass="active"
                    onClick={() => setMenu(false)} // Close menu on click
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
