import React, { useState, useRef } from "react";
import FrameImage from "../Assets/Images/HowWeWork/Frame.png";
import Poster from "../Assets/Images/HowWeWork/Poster.jpg";
import Video from "../Assets/Images/HowWeWork/Video.mp4";
import { RiCommunityFill } from "react-icons/ri";
import { TbBrandDatabricks } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

const HowWeWork = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="lg:mt-10 md:mt-20 pb-10">
      <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-black text-center mt-10">
        How we work
      </h1>

      <div className="flex justify-center mt-20 md:p-0 lg:p-0 p-5">
        <div className="lg:left-8 left-0 bottom-12 relative">
          <img
            src={FrameImage}
            alt="FrameImage"
            className="lg:w-20 lg:visible hidden w-10 h-auto"
          />
        </div>
        <div className="relative w-full lg:max-w-3xl max-w-2xl ">
          {!isPlaying && (
            <img
              src={Poster}
              alt="Poster"
              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer rounded-xl"
              onClick={handlePlayPause}
            />
          )}
          <video
            className="w-full h-full rounded-xl"
            ref={videoRef}
            controls
            onClick={handlePlayPause}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex justify-evenly lg:flex-row flex-col lg:gap-10 gap-5 mt-10 md:ml-20 ml-10">
        <div className="flex flex-col mt-10 w-80 lg:w-80 md:w-3/4">
          <RiCommunityFill className="text-5xl lg:text-5xl md:text-7xl text-white bg-[#449183] rounded-xl p-2" />
          <h1 className="mt-5 font-bold text-xl md:text-3xl lg:text-xl">
            Community center
          </h1>
          <p className="text-base md:text-2xl lg:text-base mt-5 font-normal lg:font-normal md:font-semibold">
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland.
          </p>
        </div>

        <div className="flex flex-col mt-10 w-80 lg:w-80 md:w-3/4">
          <TbBrandDatabricks className="text-5xl lg:text-5xl md:text-7xl text-white bg-[#449183] rounded-xl p-2" />
          <h1 className="mt-5 font-bold text-xl md:text-3xl lg:text-xl">
            Data-driven approach
          </h1>
          <p className="text-base lg:text-base md:text-2xl mt-5 font-normal lg:font-normal md:font-semibold">
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland, but the fundamental principles.
          </p>
        </div>

        <div className="flex flex-col mt-10 w-80 lg:w-80 md:w-3/4">
          <MdSupportAgent className="text-5xl lg:text-5xl md:text-7xl text-white bg-[#449183] rounded-xl p-2" />
          <h1 className="mt-5 font-bold text-xl md:text-3xl lg:text-xl">
            Focused support
          </h1>
          <p className="text-base lg:text-base md:text-2xl mt-5 font-normal lg:font-normal md:font-semibold">
            Charity law within the UK varies among England and Wales, Scotland
            and Northern Ireland,the fundamental principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
