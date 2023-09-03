import React, { useState, useEffect } from "react";
import { VscMenu, VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <h1 className=" white">FemFit</h1>
        </Link>
      </div>
      {windowWidth > 740 ? (
        <div className="menu-items open light-blue-color light-f">
          <Link to="/">
            {" "}
            <h4>Home</h4>
          </Link>
          <Link to="/Classes">
            <h4>Classes</h4>
          </Link>
          <Link to="/About">
            <h4>About Us</h4>
          </Link>
          <Link to="/blog/0">
            <h4>Blog</h4>
          </Link>
          <Link to="/ContactUs">
            <h4>Contact us</h4>
          </Link>
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
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/Classes">
            <h3>Classes</h3>
          </Link>
          <Link to="/About">
            <h3>About Us</h3>
          </Link>
          <Link to="/blog/0">
            <h3>Blog</h3>
          </Link>
          <Link to="/ContactUs">
            <h3>Contact us</h3>
          </Link>
        </div>
      )}
      <Link to="/ScheduleNow">
        <VscCalendar className={isOpen ? "logo-open" : " avatar white"} />
      </Link>
    </div>
  );
};

export default Navbar;
