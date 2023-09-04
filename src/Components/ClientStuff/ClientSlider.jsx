import React, { Component } from "react";
import Slider from "react-slick";
import { CLIENT_STUFF } from "../../constants";

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
            <img src={CLIENT_STUFF.review1} alt="" />
          </div>
          <div className="team-tab">
            <img src={CLIENT_STUFF.review2} alt="" />
          </div>
          <div className="team-tab">
            <img src={CLIENT_STUFF.review3} alt="" />
          </div>
          <div className="team-tab">
            <img src={CLIENT_STUFF.review4} alt="" />
          </div>
          <div className="team-tab">
            <img src={CLIENT_STUFF.review5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
