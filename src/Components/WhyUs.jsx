import React from "react";
import ReactSlider from "./ReactSlider";
const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="why-us-container">
        <div className="title-button">
          <div className="whyus-title-text">
            <h4 className="light-blue-color">* Why Choose Us</h4>
            <h1 className="white">SOLUTION WE PROVIDE</h1>
          </div>
          <div className="wu-button-stuff">
            <button>ALL SERVICES</button>
            {/* <div className="button-box "></div> */}
          </div>
        </div>

        <ReactSlider />
      </div>
    </section>
  );
};

export default WhyUs;
