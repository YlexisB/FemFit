import React from "react";
import { FIRST_INFO_STUFF } from "../constants";

const FirstInfo = () => {
  return (
    <section id="first-info-sec">
      <div className="f-info-container">
        <div className="f-infotext">
          <div className="intro">
            <h2>{FIRST_INFO_STUFF.title}</h2>
            <h2> {FIRST_INFO_STUFF.title2}</h2>
          </div>
          <span class="br"></span>
          <p>{FIRST_INFO_STUFF.para1}</p>
          <p>{FIRST_INFO_STUFF.para2}</p>
        </div>
        <div className="f-info-all">
          <div className="f-img-contain">
            <img
              className="info-img"
              src={FIRST_INFO_STUFF.womanGraphic}
              alt=""
            />
          </div>
          <div className="f-info-tabs">
            <img src={FIRST_INFO_STUFF.tab1} alt="" />

            <img src={FIRST_INFO_STUFF.tab2} alt="" />

            <img src={FIRST_INFO_STUFF.tab3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstInfo;
