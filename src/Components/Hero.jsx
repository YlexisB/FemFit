import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Modal from "./Modal";
import { HERO_HOME_STUFF } from "../constants";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [imageIndex, setImageIndex] = useState(0);
  const images = ["./images/hero/2femhero.png", "./images/hero/1femhero.png"];
  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div id="hero-all">
      <hr />
      <section id="hero-section">
        <div className="hero-container">
          <div className="hero-text-container">
            <div>
              <h4 className="light-blue-color">{HERO_HOME_STUFF.subheading}</h4>
              <h1 className=" white stroke-text">
                {HERO_HOME_STUFF.headingstrokeText}
              </h1>
              <span class="br"></span>
              <h1 className="your-bod light-blue-color">
                {HERO_HOME_STUFF.heading}
              </h1>
              <p className=" white">{HERO_HOME_STUFF.headingP}</p>
            </div>

            <button onClick={openModal} className="home-hero-btn white light-f">
              {HERO_HOME_STUFF.callToAction}
            </button>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
            {/* <div className="block"></div> */}
          </div>
          <div className="image-container">
            <img
              className="hero-images"
              src={images[imageIndex]}
              // style={{ width: "570px" }}
              alt=""
            />

            <div className="hero-img-buttons">
              <button onClick={prevImage}>
                <VscChevronLeft />
              </button>
              <button onClick={nextImage}>
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
