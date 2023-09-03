import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
              <img src="./images/ourteam/team-tab-1.png" alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src="./images/ourteam/team-tab-2.png" alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src="./images/ourteam/team-tab-3.png" alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src="./images/ourteam/team-tab-4.png" alt="" />
            </Link>
          </div>
          <div className="team-tab">
            <Link to="/about">
              <img src="./images/ourteam/team-tab-5.png" alt="" />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
