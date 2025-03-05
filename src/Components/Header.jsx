import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Reset menu state when the window is resized to a width greater than the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false); // Close the menu if width is larger than mobile size
      }
    };

    // Attach resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex w-full p-4 justify-center items-center text-gray-50 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-full mx-auto max-md:justify-end">
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            type="button"
            className="p-2 mx-2 w-10 h-10 flex items-center justify-center rounded-lg text-stone-50 hover:border-stone-50"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={showMenu ? "true" : "false"}
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
          className={`md:flex w-full justify-center ${!showMenu && "hidden"}`}
        >
          <ul
            className={`flex ${
              showMenu ? "flex-col" : ""
            } text-2xl gap-x-24 max-lg:gap-x-10`}
          >
            {["About Me", "Projects", "Technologies", "Contact Me"].map(
              (item, index) => (
                <li key={index} className="flex justify-end">
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
