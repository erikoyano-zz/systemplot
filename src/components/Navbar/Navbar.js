import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GoX, GoThreeBars } from "react-icons/go";
// import { Button } from "./Button";
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-logo"
          >
            <img className="navbar-logo" alt="logo" src={logo}></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GoX /> : <GoThreeBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ホーム
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                事業内容
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="message"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                会社概要
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="jobs"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                採用情報
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="access"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                アクセス
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
