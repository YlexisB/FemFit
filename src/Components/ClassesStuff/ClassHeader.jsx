import React, { useState, useRef } from "react";
import Navbar from "../Navbar";
import emailjs from "@emailjs/browser";
import Modal from "../Modal";
import { CLASSES_STUFF } from "../../constants";

const ClassHeader = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_FIRST_KEY,
        process.env.REACT_APP_SECOND_KEY,
        form.current,
        process.env.REACT_APP_THIRD_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="class-section">
      <div className="class-h-img">
        <Navbar />
        <div className="class-text white">
          <h1>{CLASSES_STUFF.title}</h1>
          <p>{CLASSES_STUFF.subtitle}</p>
          <button className="class-hero-btn" onClick={openModal}>
            {CLASSES_STUFF.cta}
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
      <div className="class-h">
        <h1> {CLASSES_STUFF.title2}</h1>
        <hr />
        <p>{CLASSES_STUFF.titlep}</p>
      </div>
      <div className="class-img">
        <div>
          <div>
            <img src="/images/classes/yoga.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.yoga}</h1>
              <p>{CLASSES_STUFF.yogaP}</p>
              <button>{CLASSES_STUFF.yogaTime}</button>
            </div>
          </div>
          <div>
            <img src="/images/classes/crossfit.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.crossfit}</h1>
              <p>{CLASSES_STUFF.crossfitP}</p>
              <button>{CLASSES_STUFF.crossfitTime}</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/classes/strength.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.strength}</h1>
              <p>{CLASSES_STUFF.strengthP}</p>
              <button>{CLASSES_STUFF.strengthTime}</button>
            </div>
          </div>
          <div>
            <img src="/images/classes/boxing.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.boxing}</h1>
              <p>{CLASSES_STUFF.boxingP}</p>
              <button>{CLASSES_STUFF.boxingTime}</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/classes/pspeed.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.power}</h1>
              <p>{CLASSES_STUFF.power1}</p>
              <button>{CLASSES_STUFF.powerTime}</button>
            </div>
          </div>
          <div>
            <img src="/images/classes/open-gym.png" alt="" />
            <div className="text-container white">
              <h1>{CLASSES_STUFF.open}</h1>
              <p>{CLASSES_STUFF.openP}</p>
              <div className="open-gym-slot">
                <h4>{CLASSES_STUFF.weekday}</h4>
                <div className="open-gym-b">
                  <button>{CLASSES_STUFF.openSlot1}</button>
                  <button>{CLASSES_STUFF.openSlot2}</button>
                  <button>{CLASSES_STUFF.openSlot3}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="class-advantage">
        <h1>{CLASSES_STUFF.title3}</h1>
        <div className="class-a-b">
          <div className="class-a">
            <div>
              <div className="c-text-img">
                <div>
                  <img src={CLASSES_STUFF.a1Img} alt="" />
                </div>
                <div>
                  <h2>{CLASSES_STUFF.a1} </h2>

                  <p>{CLASSES_STUFF.ap1}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="c-text-img">
                <div>
                  <img src={CLASSES_STUFF.a2img} alt="" />
                </div>
                <div>
                  <h2>{CLASSES_STUFF.a2}</h2>

                  <p>{CLASSES_STUFF.ap2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="class-b">
            <div>
              <div className="c-text-img">
                <div>
                  <img src="/images/classes/class-coach.png" alt="" />
                </div>
                <div>
                  <h2>{CLASSES_STUFF.a3}</h2>

                  <p>{CLASSES_STUFF.ap3}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="c-text-img">
                <div>
                  <img src={CLASSES_STUFF.a4img} alt="" />
                </div>
                <div>
                  <h2>{CLASSES_STUFF.a4}</h2>

                  <p>{CLASSES_STUFF.ap4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="class-free">
        <div className="c-free">
          <div className="c-free-a white">
            <h1>{CLASSES_STUFF.ctaTitle}</h1>

            <form ref={form} className="email-container" onSubmit={sendEmail}>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email Address here"
              />
              <button>{CLASSES_STUFF.ctabutton}</button>
            </form>
          </div>

          <img src={CLASSES_STUFF.ctaImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClassHeader;
