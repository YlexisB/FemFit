import React from "react";
import OurTeamSlider from "./OurTeamSlider";

const OurTeam = () => {
  return (
    <section className="gray-bg" id="our-team-section">
      <div className="our-team-all">
        <div className="our-team-title">
          <h4 className="light-blue-color">* Meet Our Team</h4>
          <h1 className="white"> Meet Our Team</h1>
        </div>

        <OurTeamSlider />
      </div>
    </section>
  );
};

export default OurTeam;
