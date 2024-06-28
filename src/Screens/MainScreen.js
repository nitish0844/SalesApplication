import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import OurTeam from "../Components/OurTeam";
import Testimonial from "../Components/Testimonial";
import HowWeWork from "../Components/HowWeWork";
import JoinToUs from "../Components/JoinToUs";
import Footer from "../Components/Footer";

const MainScreen = () => {
  const HowWeWorkRef = useRef(null);
  const TestimonialRef = useRef(null);
  const OurTeamRef = useRef(null);
  const JoinToUsRef = useRef(null);

  const scrollToHowWeWork = () => {
    if (HowWeWorkRef.current) {
      HowWeWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTestimonial = () => {
    if (TestimonialRef.current) {
      TestimonialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOurTeam = () => {
    if (OurTeamRef.current) {
      OurTeamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToJoinToUs = () => {
    if (JoinToUsRef.current) {
      JoinToUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-[#F3F2E7]">
        <Navbar
          scrollToHowWeWork={scrollToHowWeWork}
          scrollToTestimonial={scrollToTestimonial}
          scrollToOurTeam={scrollToOurTeam}
          scrollToJoinToUs={scrollToJoinToUs}
        />
        <Header />
      </div>

      {/* How we work */}
      <div ref={HowWeWorkRef}>
        <HowWeWork />
      </div>

      {/* Testimonial */}
      <div ref={TestimonialRef}>
        <Testimonial />
      </div>

      {/* Our Team */}
      <div ref={OurTeamRef}>
        <OurTeam />
      </div>

      {/* Join To Us */}
      <div ref={JoinToUsRef}>
        <JoinToUs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainScreen;
