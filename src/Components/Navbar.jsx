import React, { useState, useEffect } from "react";
import { VscMenu, VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { NAV_STUFF } from "../constants";

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
        <img className="logo-avatar logo" src={NAV_STUFF.logo} alt="" />
        <Link to="/">
          <h1 className=" white">{NAV_STUFF.siteName}</h1>
        </Link>
      </div>
      {windowWidth > 740 ? (
        <div className="menu-items open light-blue-color light-f">
          <Link to="/">
            {" "}
            <h4>{NAV_STUFF.home}</h4>
          </Link>
          <Link to="/Classes">
            <h4>{NAV_STUFF.classes}</h4>
          </Link>
          <Link to="/About">
            <h4>{NAV_STUFF.about}</h4>
          </Link>
          <Link to="/blog/0">
            <h4>{NAV_STUFF.blog}</h4>
          </Link>
          <Link to="/ContactUs">
            <h4>{NAV_STUFF.contact}</h4>
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
            <h3>{NAV_STUFF.home}</h3>
          </Link>
          <Link to="/Classes">
            <h3>{NAV_STUFF.classes}</h3>
          </Link>
          <Link to="/About">
            <h3>{NAV_STUFF.about}</h3>
          </Link>
          <Link to="/blog/0">
            <h3>{NAV_STUFF.blog}</h3>
          </Link>
          <Link to="/ContactUs">
            <h3>{NAV_STUFF.contact}</h3>
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
