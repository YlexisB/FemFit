import React, { Component } from "react";
import Slider from "react-slick";

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
            <img src="./images/whyus/slide1-wu.png" alt="" />
          </div>
          <div className="slider-div">
            <img src="./images/whyus/slide2-wu.png" alt="" />
          </div>
          <div className="slider-div">
            <img src="./images/whyus/slide3-wu.png" alt="" />
          </div>
          <div className="slider-div">
            <img src="./images/whyus/slide4-wu.png" alt="" />
          </div>

          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
