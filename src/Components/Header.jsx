import React, { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <nav className="flex w-full p-4 justify-center items-center text-gray-50 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-full mx-auto max-md:justify-end">
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
            className="p-2 mx-2 w-10 h-10 flex items-center justify-center rounded-lg text-stone-50 hover:border-stone-50"
            aria-controls="navbar-default"
            aria-expanded="false"
            whileHover={{ opacity: 0.7 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`flex w-full justify-center max-md:${
            showMenu && "hidden"
          } max-md:flex-col`}
        >
          <ul
            className={`flex text-2xl gap-x-24 max-lg:gap-x-10 max-md:${
              showMenu ? "flex-col" : "hidden"
            }`}
          >
            {["About Me", "Projects", "Tech Stack", "Contact Me"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    className="relative group"
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
