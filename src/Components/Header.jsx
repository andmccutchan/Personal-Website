import React from "react";

const Header = () => {
  return (
    <div className="flex w-full py-3">
      <nav className="flex text-gray-50 w-full justify-between">
        <p className="text-2xl">Andrew McCutchan</p>
        <ul className="flex text-2xl justify-between w-1/2">
          <li>
            <a className="relative group" href="#">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group" href="#">
              About Me
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group" href="#">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group" href="#">
              Tech Stack
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a className="relative group" href="#">
              Contact Me
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-stone-50 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
