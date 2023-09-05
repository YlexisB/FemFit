import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { JOIN_STUFF } from "../constants";

const Join = () => {
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

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">{JOIN_STUFF.t1}</span>
          <span>{JOIN_STUFF.t2}</span>
        </div>
        <div>
          <span>{JOIN_STUFF.t3}</span>
          <span V>{JOIN_STUFF.t4}</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here"
          />
          <button className="btn btn-j">{JOIN_STUFF.cta}</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
