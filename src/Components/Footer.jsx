import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="text-stone-50">
          &copy; {new Date().getFullYear()} | Developed by Andrew McCutchan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
