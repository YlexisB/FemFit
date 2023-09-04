import React from "react";
import WhyUsSlider from "./WhyUsSlider";

import { Link } from "react-router-dom";
import { WHY_US_STUFF } from "../../constants";

const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="why-us-container">
        <div className="title-button">
          <div className="whyus-title-text">
            <h4 className="light-blue-color">{WHY_US_STUFF.subTitle}</h4>
            <h1 className="white">{WHY_US_STUFF.title}</h1>
          </div>
          <div className="wu-button-stuff">
            <Link to="/Classes">
              <button>{WHY_US_STUFF.buttontext}</button>
            </Link>
          </div>
        </div>

        <WhyUsSlider />
      </div>
    </section>
  );
};

export default WhyUs;
