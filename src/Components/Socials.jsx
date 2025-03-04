import React from "react";

const Socials = () => {
  return (
    <section>
      <div className="flex justify-center space-x-3">
        <div className="flex justify-center items-center">
          <a href="https://www.linkedin.com/in/andrew-mccutchan/">
            <img
              src="/icons8-linked-in.svg"
              width="36"
              height="36"
              alt="LinkedIn Logo"
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://github.com/andmccutchan">
            <img
              src="/github-mark.svg"
              width="36"
              height="36"
              alt="GitHub Logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
