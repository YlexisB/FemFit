import React, { Component } from "react";
import Slider from "react-slick";
import { WHY_US_STUFF } from "../../constants";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-div">
            <img src={WHY_US_STUFF.slide1} alt="" />
          </div>
          <div className="slider-div">
            <img src={WHY_US_STUFF.slide2} alt="" />
          </div>
          <div className="slider-div">
            <img src={WHY_US_STUFF.slide3} alt="" />
          </div>
          <div className="slider-div">
            <img src={WHY_US_STUFF.slide4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
