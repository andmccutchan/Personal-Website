import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-3">
      <div className="flex justify-center">
        <p className="m-0 p-0 align-middle text-stone-50">
          &copy; Andrew McCutchan {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
