import React, { useState, useEffect } from "react";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import { GoX, GoThreeBars } from "react-icons/go";
// import { Button } from "./Button";
import Home from "../pages/Home";
import "./navbar.css";
import logo from "../../../src/images/logo-clear.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img className="navbar-logo" alt="logo" src={logo}></img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GoX /> : <GoThreeBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link1
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ホーム
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                事業内容
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                activeClass="active"
                to="message"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                社長挨拶
              </Link1>
            </li>

            <li className="nav-item">
              <Link1
                activeClass="active"
                to="jobs"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                採用情報
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                activeClass="active"
                to="gaiyo"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                会社概要
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                activeClass="active"
                to="access"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                アクセス
              </Link1>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
