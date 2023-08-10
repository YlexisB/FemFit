import React from "react";

const Footer = () => {
  return (
    <section className="gray-bg" id="footer">
      <div className="footer-all">
        <div className="footer-img">
          <div className="img img-1">
            <img src="./images/logo/1femfit-logo.png" alt="logo" />
            <h1 className="white">FemFit</h1>
          </div>
          <div className="img img-2">
            <img src="./images/logo/addy-img.png" alt="" />
            <p> 38 west Panama City,NJ,13232</p>
          </div>
        </div>
        <div className="footer-half">
          <h1 className="white">
            Empowering Women: Strength, Confidence, Wellness. Join FemFit Today!
          </h1>
          <div className="info">
            <div className="footer-info">
              <h3 className="light-blue-color">Working Hours</h3>
              <p>Mon-Fri:6am-10pm</p>
              <p>Sat-Sun:7am-11pm</p>
            </div>
            <div className="footer-info">
              <h3 className="light-blue-color">CALL US</h3>
              <p>+1 800 123 4567</p>
              <p>Sat-Sun:7am-11pm</p>
            </div>
            <div className="footer-info">
              <h3 className="light-blue-color">WE ARE HERE</h3>
              <p> 38 West Panama City, NJ,13232</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
