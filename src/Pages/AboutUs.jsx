import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import AboutSec from "../Components/AboutSec";
import Join from "../Components/Join";
import Modal from "../Components/Modal";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hero-image-3">
        <Navbar />
        <div className="about-hero-text">
          <h1 className="white">
            <i>NEVER GIVE UP</i>
          </h1>
          <h1 className="light-blue-color">
            <i>THE BEST FITNESS FOR YOU</i>
          </h1>
          <button
            onClick={openModal}
            className=" about-hero-btn light-blue-color"
          >
            GET STARTED
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
      <AboutSec />
      <Join />
    </>
  );
};

export default AboutUs;
