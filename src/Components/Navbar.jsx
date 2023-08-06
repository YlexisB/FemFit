import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="nav-container" className={isOpen ? "open" : ""}>
      <div className="logo-stuff">
        <img
          className="logo-avatar logo"
          src="./images/logo/femFit-logo.png"
          alt=""
        />
        <h1>FemFit</h1>
      </div>
      {windowWidth > 740 ? (
        <div className="menu-items open">
          <h3>Home</h3>
          <h3>Classes</h3>
          <h3>Blog</h3>
          <h3>Contact us</h3>
        </div>
      ) : null}
      {windowWidth <= 740 ? (
        <div
          className={isOpen ? "menu-icon-open" : "menu-icon"}
          onClick={handleToggle}
        >
          <VscMenu
            className={isOpen ? "hamburger-open" : "hamburger"}
            size={30}
          ></VscMenu>
        </div>
      ) : null}

      {windowWidth <= 740 && isOpen && (
        <div className="menu-dropdown">
          <h3>Home</h3>
          <h3>Classes</h3>
          <h3>Blog</h3>
          <h3>Contact us</h3>
        </div>
      )}
      <img
        className={isOpen ? "logo-open" : "logo-avatar avatar"}
        src="./images/logo/fem-avatar.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
