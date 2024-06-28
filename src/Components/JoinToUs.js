import React from "react";
import Frame from "../Assets/Images/JoinToUs/Frame.png";
import Frame2 from "../Assets/Images/JoinToUs/Frame 2.png";

const JoinToUs = () => {
  return (
    <div className="mt-10 pb-10">
      <h1 className="text-4xl font-bold text-black text-center mt-10">
        Join To Us
      </h1>
      <img src={Frame} alt="Frame" className="w-10 h-auto" />

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex lg:flex-row md:flex-col flex-col justify-center items-center gap-10">
            <div className="flex flex-col">
              <label className="text-lg font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-[300px] lg:w-[300px] md:w-[500px] h-[40px] border-2 border-gray-400 mt-2 px-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[300px] lg:w-[300px] md:w-[500px] h-[40px] border-2 border-gray-400 mt-2 px-2"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Email Address</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="lg:w-[650px] md:w-[500px] w-[300px] h-[40px] border-2 border-gray-400 mt-2 px-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Your Subject</label>
            <input
              type="text"
              placeholder="Donation"
              className="lg:w-[650px] md:w-[500px] w-[300px] h-[40px] border-2 border-gray-400 mt-2 px-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">Message</label>
            <textarea
              type="text"
              placeholder="Message"
              className="lg:w-[650px] md:w-[500px] w-[300px] h-[100px] border-2 border-gray-400 mt-2 px-2"
            />
          </div>

          <button className="bg-[#00715D] lg:px-64 md:px-48 px-10 py-3 rounded-md cursor-pointer text-white text-lg font-bold">
            Send Message
          </button>
        </div>
      </form>

      <div className="flex justify-end mt-10">
        <img src={Frame2} alt="Frame2" className="w-16 h-auto bottom-10" />
      </div>
    </div>
  );
};

export default JoinToUs;
