// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import Logo from "../Assets/Images/Navbar/Logo.png";

// const Navbar = ({
//   scrollToHowWeWork,
//   scrollToTestimonial,
//   scrollToOurTeam,
//   scrollToJoinToUs,
// }) => {
//   return (
//     <nav className="h-14 z-30">
//       <div className="flex flex-row justify-around gap-52">
//         <div className="p-5">
//           <img src={Logo} alt="Logo" className="w-32 h-10" />
//         </div>
//         <div className="flex flex-wrap items-center lg:gap-12 md:gap-9 gap-8 justify-center lg:p-2 md:p-2 p-4">
//           <a className="text-black text-xs font-medium hover:text-gray-700 cursor-pointer">
//             HOME
//           </a>

//           <a
//             className="text-black text-xs font-medium hover:text-gray-700 cursor-pointer"
//             onClick={scrollToHowWeWork}
//           >
//             HOW WE WORK
//           </a>

//           <a
//             className="text-black text-xs font-medium hover:text-gray-700 cursor-pointer"
//             onClick={scrollToTestimonial}
//           >
//             TESTIMONIAL
//           </a>

//           <a
//             className="text-black text-xs font-medium hover:text-gray-700 cursor-pointer"
//             onClick={scrollToOurTeam}
//           >
//             OUR TEAM
//           </a>

//           {/* <a className="text-black text-xs font-medium hover:text-gray-700 cursor-pointer">
//             JOIN TO US
//           </a> */}

//           <button
//             className="bg-black px-3 py-2 rounded-md cursor-pointer text-white text-xs font-bold"
//             onClick={scrollToJoinToUs}
//           >
//             JOIN TO US
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import Logo from "../Assets/Images/Navbar/Logo.png";

const Navbar = ({
  scrollToHowWeWork,
  scrollToTestimonial,
  scrollToOurTeam,
  scrollToJoinToUs,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //Add fixed to float over the header
    <nav className="flex flex-row lg:justify-evenly md:justify-around justify-between p-4 bg-Tiger-black text-white z-20 lg:gap-64 md:gap-64">
      <div className="">
        <img src={Logo} alt="Logo" className="w-32 h-10" />
      </div>
      <div className="lg:hidden">
        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className={`block text-white hover:text-white focus:text-white focus:outline-none transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          {isOpen ? (
            <FiX
              color="black"
              className="fill-current z-50 cursor-pointer text-black md:text-3xl text-xl"
            />
          ) : (
            <GiHamburgerMenu
              color="black"
              className="flex fill-current cursor-pointer text-black md:text-3xl text-xl"
            />
          )}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-60 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {isOpen && (
          <ul className="mt-2 fixed top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center self-center z-50 bg-Tiger-black space-y-4 w-full">
            <li>
              <a
                // onClick={(e) => handleSmoothScroll(e, "home-section")}
                className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                onClick={scrollToHowWeWork}
                className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer"
              >
                HOW WE WORK
              </a>
            </li>
            <li>
              <a
                href="#gallery-section"
                onClick={scrollToTestimonial}
                className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer"
              >
                TESTIMONIAL
              </a>
            </li>
            <li>
              <a
                onClick={scrollToOurTeam}
                className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer"
              >
                OUR TEAM
              </a>
            </li>

            <li>
              <a
                onClick={scrollToJoinToUs}
                className="rounded-lg text-white bg-black py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer"
              >
                JOIN TO US
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Lg screen components */}

      <ul className="hidden lg:flex space-x-8">
        <li>
          <a
            // onClick={sc}
            className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:font-semibold cursor-pointer"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            onClick={scrollToHowWeWork}
            className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:font-semibold cursor-pointer"
          >
            HOW WE WORK
          </a>
        </li>
        <li>
          <a
            onClick={scrollToTestimonial}
            className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:font-semibold cursor-pointer"
          >
            TESTIMONIAL
          </a>
        </li>
        <li>
          <a
            onClick={scrollToOurTeam}
            className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:font-semibold cursor-pointer"
          >
            OUR TEAM
          </a>
        </li>

        <li>
          <a
            onClick={scrollToJoinToUs}
            className="bg-TigerColor rounded-lg text-white bg-black py-2 px-2 md:py-2 md:px-4 text-sm md:font-semibold cursor-pointer"
          >
            JOIN TO US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
