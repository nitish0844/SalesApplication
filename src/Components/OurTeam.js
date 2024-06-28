import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import SampleUser1 from "../Assets/Images/OurTeam/User1.png";
import SampleUser2 from "../Assets/Images/OurTeam/User2.png";
import SampleUser3 from "../Assets/Images/OurTeam/User3.png";
import SampleUser4 from "../Assets/Images/OurTeam/User4.png";
import Shape from "../Assets/Images/OurTeam/OurTeamShape.png";

const OurTeam = () => {
  const teamMembers = [
    { name: "John Doe", designation: "Volunteer", image: SampleUser1 },
    { name: "Jane Smith", designation: "Volunteer", image: SampleUser2 },
    { name: "Alice Johnson", designation: "Volunteer", image: SampleUser3 },
    { name: "Bob Brown", designation: "Volunteer", image: SampleUser4 },
  ];

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeScreen ? teamMembers.length : isMediumScreen ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mt-10 pb-10">
      <div className="text-xl font-semibold text-green-800 text-center">
        Our Team
      </div>

      <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-black text-center mt-5">
        Meet Our Volunteers
      </h1>

      <div className="mx-auto max-w-6xl mt-14">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="relative flex flex-col justify-center group w-52 h-auto mx-auto">
                <img
                  src={member.image}
                  alt={`SampleUser${index + 1}`}
                  className="w-72 h-72"
                  style={{ objectFit: "contain" }}
                />
                <div className="absolute bottom-1 left-0 right-0 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity py-2 duration-300">
                  <div className="font-bold">{member.name}</div>
                  <div>{member.designation}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-start mt-10">
        <img src={Shape} alt="Shape" className="w-24 h-auto" />
      </div>

      <div className="flex justify-center text-lg font-semibold text-[#00715D] text-center border-2 border-[#00715D] h-14 w-48 mx-auto items-center cursor-pointer">
        More about Team
      </div>
    </div>
  );
};

export default OurTeam;
