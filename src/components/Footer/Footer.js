import React from "react";
import "./Footer.css";
// import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>会社情報</h2>
            <p to="/sign-up">社長挨拶</p>
            <p to="/sign-up">事業内容</p>
            <p to="/sign-up">会社概要</p>
          </div>
          <div class="footer-link-items">
            <h2>採用情報</h2>
            <p to="/">募集要項</p>
            <p to="/">応募フォーム</p>
          </div>
          <div class="footer-link-items">
            <h2>アクセス</h2>
          </div>
          <div class="footer-link-items">
            <h2>Rights</h2>
            <p to="/"> 個人情報保護方針 </p>
            <p to="/">個人情報の取り扱い </p>
            <p to="/">情報セキュリティ基本方針 </p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <p to="/" className="social-logo">
              SystemPlot©
            </p>
          </div>
          <small class="website-rights">SystemPlot© 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
