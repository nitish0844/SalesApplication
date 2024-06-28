import React from "react";
import HeaderImage from "../Assets/Images/header/HeaderImage.png";

const Header = () => {
  return (
    <div className="lg:mt-0 mt-14">
      <div className="flex justify-evenly lg:flex-row flex-col lg:gap-10 gap-0 items-center">
        <div className="flex flex-col justify-center lg:ml-4 md:ml-2 ml-4">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold text-black lg:w-[400px] md:w-[650px] w-2/3">
            Donations that change the world
          </h1>

          <p className="text-lg font-medium text-gray-600 lg:w-[380px] w-4/5 mt-5">
            Volunteers do not necessarily have the time they just have the
            heart.
          </p>

          <button className="text-white bg-[#00715D] w-40 h-10 mt-5">
            Donate Now
          </button>
        </div>

        <div className="flex lg:mt-5 md:mt-10 mt-10 items-center justify-center">
          <img
            src={HeaderImage}
            alt="HeaderImage"
            className="lg:w-[600px] md:w-3/4 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
