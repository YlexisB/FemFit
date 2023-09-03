import React from "react";
import WhyUsSlider from "./WhyUsSlider";

import { Link } from "react-router-dom";

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
            <Link to="/Classes">
              <button>ALL SERVICES</button>
            </Link>
          </div>
        </div>

        <WhyUsSlider />
      </div>
    </section>
  );
};

export default WhyUs;
