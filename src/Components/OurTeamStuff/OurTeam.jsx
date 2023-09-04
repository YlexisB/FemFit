import React from "react";
import OurTeamSlider from "./OurTeamSlider";
import { OURTEAM_STUFF } from "../../constants";

const OurTeam = () => {
  return (
    <section className="gray-bg" id="our-team-section">
      <div className="our-team-all">
        <div className="our-team-title">
          <h4 className="light-blue-color">{OURTEAM_STUFF.subtitle}</h4>
          <h1 className="white"> {OURTEAM_STUFF.title}</h1>
        </div>

        <OurTeamSlider />
      </div>
    </section>
  );
};

export default OurTeam;
