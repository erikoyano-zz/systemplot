import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import logo from "../../images/logo-white.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>会社情報</h2>
            <Link1
              activeClass="active"
              to="message"
              spy={true}
              smooth={true}
              duration={1000}
            >
              社長挨拶
            </Link1>
            <Link1
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              事業内容
            </Link1>
            <Link1
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              会社概要
            </Link1>
          </div>
          <div class="footer-link-items">
            <h2>採用情報</h2>
            <Link1
              activeClass="active"
              to="jobs"
              spy={true}
              smooth={true}
              duration={1000}
            >
              募集要項
            </Link1>
          </div>
          <div class="footer-link-items">
            <h2>アクセス</h2>
          </div>
          <div class="footer-link-items">
            <h2>サイトご利用について</h2>
            <Link1 to="/"> 個人情報保護方針 </Link1>
            <Link1 to="/">個人情報の取り扱い </Link1>
            <Link1 to="/">情報セキュリティ基本方針 </Link1>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <Link2 to="/">
          <img src={logo} to="/" alt="logooo" className="social-logo" />
        </Link2>

        <small class="website-rights">SystemPlot© 2021</small>
      </div>
    </div>
  );
}

export default Footer;
