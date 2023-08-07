import React from "react";

const FirstInfo = () => {
  return (
    <section id="first-info-sec">
      <div className="f-info-container">
        <div className="f-infotext">
          <div className="intro">
            <h2>PERSONAL TRAININGS</h2>
            <h2> ANYWHERE..</h2>
          </div>
          <span class="br"></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur odio eros.
          </p>
          <p>
            {" "}
            Quis cursus turpis aliquet bibendum. Aenean vestibulum magna sit
            amet tellus consectetur ultricies. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="f-info-all">
          <div className="f-img-contain">
            <img
              className="info-img"
              src="./images/firstInfo/1info-img.png"
              alt=""
              //   style={{ width: "670px" }}
            />
          </div>
          <div className="f-info-tabs">
            <img src="./images/firstInfo/info-tab-1.png" alt="" />
            <img src="./images/firstInfo/info-tab-2.png" alt="" />
            <img src="./images/firstInfo/info-tab-5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstInfo;
