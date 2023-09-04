import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { OURTEAM_STUFF } from "../../constants";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };

    return (
      <div className="o-team-slider">
        <Slider {...settings}>
          <div className="team-tab">
            <Link to="/about">
              <img src={OURTEAM_STUFF.team1} alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src={OURTEAM_STUFF.team2} alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src={OURTEAM_STUFF.team3} alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src={OURTEAM_STUFF.team4} alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src={OURTEAM_STUFF.team5} alt="" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
