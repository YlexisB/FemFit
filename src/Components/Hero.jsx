import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import Modal from "./Modal";

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
              <h4 className="light-blue-color">
                YOU'RE MORE THAN JUST A MEMBER
              </h4>
              <h1 className=" white stroke-text">TRANSFORM</h1>
              <span class="br"></span>
              <h1 className="your-bod light-blue-color">YOUR BODY</h1>
              <p className=" white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur odio eros, quis cursus turpis aliquet bibendum.
                Aenean vestibulum magna sit amet tellus consectetur ultricies.
              </p>
            </div>

            <button onClick={openModal} className="home-hero-btn white light-f">
              GET STARTED
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
