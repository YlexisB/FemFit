import React, { useState } from "react";
import { MODAL_STUFF } from "../constants";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          {/* <button className="close-button" onClick={onClose}>
            x
          </button> */}

          <form id="get-started-form">
            <button className="modal-close-button" onClick={onClose}>
              x
            </button>
            <h2>{MODAL_STUFF.title}</h2>
            <p>{MODAL_STUFF.titleP}</p>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name*"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number*"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail*"
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder="Type your message"
            ></textarea>
            <button className="modal-submit" type="submit">
              {MODAL_STUFF.submit}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
