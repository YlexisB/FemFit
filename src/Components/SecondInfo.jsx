import React from "react";

const SecondInfo = () => {
  return (
    <section>
      <div className="sec-info-all">
        <div className="sec-info-vid">
          <video
            preload="auto"
            // width="540"
            // height="540"
            poster="/images/secondInfo/1sec-info-vid.png"
            controls
          >
            <source
              src="./images/secondInfo/1sec-info-vid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="sec-tabs">
          <div className="sec-tab-row">
            <img src="./images/secondInfo/sec-info-tab1.png" alt="" />
            <img src="./images/secondInfo/sec-info-tab1.png" alt="" />
          </div>
          <div className="sec-tab-row">
            <img src="./images/secondInfo/sec-info-tab1.png" alt="" />
            <img src="./images/secondInfo/sec-info-tab1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondInfo;
