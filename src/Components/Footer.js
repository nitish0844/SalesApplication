import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] md:h-40 lg:h-28 h-52 flex justify-center items-center">
      <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center space-x-4">
        <p className="text-white text-center text-sm">Made by Gautham</p>
        <p className="text-white text-center text-sm">
          © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
