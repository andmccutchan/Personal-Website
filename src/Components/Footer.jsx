import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-3">
      <div className="flex justify-center">
        <p className="text-stone-50">
          &copy; {new Date().getFullYear()} | Developed by Andrew McCutchan |
          Denison University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
