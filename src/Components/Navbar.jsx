import React, { useState, useEffect } from "react";
import { VscMenu, VscCalendar } from "react-icons/vsc";

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
    <div
      id="nav-container"
      className={isOpen && windowWidth <= 740 ? "open" : ""}
    >
      <div className="logo-stuff">
        <img
          className="logo-avatar logo"
          src="/images/logo/1femFit-logo.png"
          alt=""
        />
        <h1 className=" white">FemFit</h1>
      </div>
      {windowWidth > 740 ? (
        <div className="menu-items open light-blue-color light-f">
          <h4>Home</h4>
          <h4>Classes</h4>
          <h4>About Us</h4>
          <h4>Blog</h4>
          <h4>Contact us</h4>
        </div>
      ) : null}
      {windowWidth <= 740 ? (
        <div
          className={isOpen ? "menu-icon-open" : "menu-icon"}
          onClick={handleToggle}
        >
          <VscMenu
            className={isOpen ? "hamburger-open white" : "hamburger white"}
            size={30}
          ></VscMenu>
        </div>
      ) : null}
      {windowWidth > 740 && isOpen ? (
        <div className={isOpen ? "none" : null} onClick={handleToggle}>
          <VscMenu
            className={isOpen ? "hamburger-none" : null}
            size={30}
          ></VscMenu>
        </div>
      ) : null}
      {windowWidth <= 740 && isOpen && (
        <div className="menu-dropdown white light-f">
          <h3>Home</h3>
          <h3>Classes</h3>
          <h3>About Us</h3>
          <h3>Blog</h3>
          <h3>Contact us</h3>
        </div>
      )}
      <VscCalendar className={isOpen ? "logo-open" : " avatar white"} />
    </div>
  );
};

export default Navbar;
