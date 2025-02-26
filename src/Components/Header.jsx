import React from "react";

const Header = () => {
  return (
    <nav className="flex text-gray-50 w-full justify-between">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 w-full">
        <div className="flex w-auto">
          <p className="md:hidden text-3xl">Andrew McCutchan</p>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-50 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:3/4">
          <ul className="flex text-2xl justify-between w-full">
            <li className="me-8">
              <a className="relative group" href="#">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="me-8">
              <a className="relative group" href="#">
                About Me
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="me-8">
              <a className="relative group" href="#">
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="me-8">
              <a className="relative group" href="#">
                Tech Stack
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="me-8">
              <a className="relative group" href="#">
                Contact Me
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
