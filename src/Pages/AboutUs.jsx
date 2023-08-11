import React from "react";
import Navbar from "../Components/Navbar";
import AboutSec from "../Components/AboutSec";

const AboutUs = () => {
  return (
    <>
      <div className="hero-image-3">
        <Navbar />
        <div className="about-hero-text">
          <h1 className="white">
            <i>NEVER GIVE UP</i>
          </h1>
          <h1 className="light-blue-color">
            <i>THE BEST FITNESS FOR YOU</i>
          </h1>
          <button className="light-blue-color">JOIN NOW</button>
        </div>
      </div>
      <AboutSec />
    </>
  );
};

export default AboutUs;
