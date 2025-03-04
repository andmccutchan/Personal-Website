import React from "react";

const Header = () => {
  return (
    <nav className="w-full h-[60px] text-gray-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto w-full p-4">
        <div className="flex w-auto">
          <p className="md:hidden text-3xl">Menu</p>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 mx-2 w-10 h-10 justify-center text-sm text-stone-50 rounded-lg md:hidden hover:border-2 hover:border-stone-50"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
        <div className="hidden md:flex md:w-full lg:w-4/5">
          <ul className="flex text-2xl justify-between w-full">
            <li>
              <a className="relative group" href="#home">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a className="relative group" href="#contact-me">
                About Me
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a className="relative group" href="#">
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a className="relative group" href="#">
                Tech Stack
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a className="relative group" href="#">
                Contact Me
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
