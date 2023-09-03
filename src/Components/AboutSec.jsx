import React, { useState } from "react";
import { aboutData } from "../Data/AboutData";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
const AboutSec = () => {
  const [selected, setSelected] = useState(0);
  const aLength = aboutData.length;

  return (
    <section id="about-us-all">
      <div className="about-us-team">
        <div className="left-t">
          <span>The FemFit Team</span>
          <span className="stroke-text">Our Dedicated</span>
          <span>fitness experts</span>
          <span>{aboutData[selected].description}</span>
          <span>
            <span className="light-blue-color">{aboutData[selected].name}</span>{" "}
            --
            {aboutData[selected].status}
          </span>
        </div>
        <div className="right-t">
          <div className="blue-squares">
            <div className="b1"></div>
            <div className="b2"></div>
          </div>
          <img src={aboutData[selected].image} alt="" />
          <div className="arrows">
            <VscArrowLeft
              onClick={() => {
                selected === 0
                  ? setSelected(aLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              style={{ color: "white", size: "1.5rem" }}
              id="arrow arrow-left"
            />
            <VscArrowRight
              onClick={() => {
                selected === aLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              style={{ color: "white", size: "1.5rem" }}
              id="arrow arrow-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
