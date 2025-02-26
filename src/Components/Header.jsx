import React from "react";

const Header = () => {
  return (
    <div className="flex w-full border border-cyan-300">
      <nav className="flex text-gray-50">
        <p>Andrew McCutchan</p>
        <ul className="flex justify-between w-full border border-cyan-300">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Tech Stack</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
