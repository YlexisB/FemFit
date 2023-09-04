import React from "react";
import { FOOTER } from "../constants";

const Footer = () => {
  return (
    <section className="gray-bg" id="footer">
      <div className="footer-all">
        <div className="footer-img">
          <div className="img img-1">
            <img src="./images/logo/1femfit-logo.png" alt="logo" />
            <h1 className="white">{FOOTER.siteName}</h1>
          </div>
          <div className="img img-2">
            <img src={FOOTER.footerImg} alt="" />
            <p> {FOOTER.address}</p>
          </div>
        </div>
        <div className="footer-half">
          <h1 className="white">{FOOTER.title}</h1>
          <div className="info">
            <div className="footer-info">
              <h3 className="light-blue-color">{FOOTER.hoursText}</h3>
              <p>{FOOTER.weekday}</p>
              <p>{FOOTER.weekends}</p>
            </div>
            <div className="footer-info">
              <h3 className="light-blue-color">{FOOTER.call}</h3>
              <p>{FOOTER.number}</p>
            </div>
            <div className="footer-info">
              <h3 className="light-blue-color">{FOOTER.location}</h3>
              <p> {FOOTER.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
