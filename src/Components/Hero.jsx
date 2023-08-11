import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Hero = () => {
  return (
    <div id="hero-all">
      <hr />
      <section id="hero-section">
        <div className="hero-container">
          <div className="hero-text-container">
            <div>
              <h4 className="light-blue-color">
                YOU'RE MORE THAN JUST A MEMBER
              </h4>
              <h1 className=" white">TRANSFORM</h1>
              <span class="br"></span>
              <h1 className="your-bod light-blue-color">YOUR BODY</h1>
              <p className=" white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur odio eros, quis cursus turpis aliquet bibendum.
                Aenean vestibulum magna sit amet tellus consectetur ultricies.
              </p>
            </div>
            <button className="white light-f">GET STARTED</button>
            {/* <div className="block"></div> */}
          </div>
          <div className="image-container">
            <img
              className="hero-images"
              src="./images/hero/2femhero.png"
              // style={{ width: "570px" }}
              alt=""
            />
            <img src="" alt="" />
            <div className="hero-img-buttons">
              <button>
                <VscChevronLeft />
              </button>
              <button>
                <VscChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
