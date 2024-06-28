import React from "react";
import Slider from "react-slick";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import TopImage from "../Assets/Images/Testimonial/Frame.png";
import BottomImage from "../Assets/Images/Testimonial/Frame 2.png";
import { useMediaQuery } from "react-responsive";

const Testimonial = () => {
  const data = [
    {
      name: "Adom Shafi",
      designation: "Volunteer",
      comment:
        "“Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc.”",
    },
    {
      name: "Adom Shafi",
      designation: "Volunteer",
      comment:
        "“Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc.”",
    },
    {
      name: "Adom Shafi",
      designation: "Volunteer",
      comment:
        "“Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc.”",
    },
  ];

  const isMediumOrSmaller = useMediaQuery({ query: "(max-width: 968px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMediumOrSmaller ? 1 : 3, // Number of slides to show
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // Center the slide fully
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: isMediumOrSmaller ? null : <NextArrow />,
    prevArrow: isMediumOrSmaller ? null : <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowAltCircleRight size={30} style={{ color: "black" }} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowAltCircleLeft size={30} style={{ color: "black" }} />
      </div>
    );
  }

  return (
    <div className="mt-10 pb-10 bg-white">
      <div className="">
        <img src={TopImage} alt="TopImage" className="w-40 h-auto" />
      </div>

      <div className="text-xl font-semibold text-green-800 text-center">
        Testimonial
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mt-10">
        What People Say?
      </h1>

      <div className="mx-auto lg:max-w-6xl md:max-w-5xl mt-10 p-10">
        {/* Adjusted max-width for larger container */}
        <Slider {...settings}>
          {data.map((testimonial, index) => (
            <div key={index} className="">
              <div className="bg-[#F3F2E7] p-6 rounded-lg shadow-md">
                <p className="text-center text-lg italic text-gray-700">
                  {testimonial.comment}
                </p>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                  <p className="text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-10 flex justify-end">
        <img src={BottomImage} alt="BottomImage" className="w-40 h-auto" />
      </div>
    </div>
  );
};

export default Testimonial;
