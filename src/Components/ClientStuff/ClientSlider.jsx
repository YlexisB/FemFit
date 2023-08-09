import React, { Component } from "react";
import Slider from "react-slick";

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
            <img src="./images/client-f/c-tab1.png" alt="" />
          </div>
          <div className="team-tab">
            <img src="./images/client-f/c-tab2.png" alt="" />
          </div>
          <div className="team-tab">
            <img src="./images/client-f/c-tab3.png" alt="" />
          </div>
          <div className="team-tab">
            <img src="./images/client-f/c-tab4.png" alt="" />
          </div>
          <div className="team-tab">
            <img src="./images/client-f/c-tab5.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
