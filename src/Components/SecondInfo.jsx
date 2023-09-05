import React from "react";
import { SEC_INFO_STUFF } from "../constants";

const SecondInfo = () => {
  return (
    <section>
      <div className="sec-info-all">
        <div className="sec-info-vid">
          <video
            preload="auto"
            poster={SEC_INFO_STUFF.promovidPreview}
            controls
          >
            <source src={SEC_INFO_STUFF.promovid} type="video/mp4" />
          </video>
        </div>
        <div className="sec-tabs">
          <div className="sec-tab-row">
            <img src={SEC_INFO_STUFF.tab1} alt="" />
            <img src={SEC_INFO_STUFF.tab2} alt="" />
          </div>
          <div className="sec-tab-row">
            <img src={SEC_INFO_STUFF.tab3} alt="" />
            <img src={SEC_INFO_STUFF.tab4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondInfo;
