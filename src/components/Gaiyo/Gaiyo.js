import React from "react";
import Fade from "react-reveal/Fade";
import "./Gaiyo.css";

function Gaiyo() {
  return (
    <div className="block-featureblock" id="gaiyo">
      <div className="container-fluid">
        <Fade duration={3000}>
          <h1 className="title-container">会社概要</h1>
          <div className="table-wrapper">
            <div className="table-container">
              <div className="table-row">
                <h3 className="table-title">会社名</h3>
                <h3 className="table-detail">株式会社システムプロット</h3>
              </div>
              <div className="table-row">
                <h3 className="table-title">代表者</h3>
                <h3 className="table-detail">小谷野玲司</h3>
              </div>
              <div className="table-row">
                <h3 className="table-title">URL</h3>
                <h3 className="table-detail">https://www.systemplot.co.jp</h3>
              </div>
            </div>
            <div className="table-container">
              <div className="table-row">
                <h3 className="table-title">創立年月日</h3>
                <h3 className="table-detail">平成 元年 3月 8日</h3>
              </div>
              <div className="table-row">
                <h3 className="table-title">資本金</h3>
                <h3 className="table-detail">1,000万円</h3>
              </div>
              <div className="table-row">
                <h3 className="table-title">取引銀行</h3>
                <h3 className="table-detail">みずほ銀行 町田支店</h3>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Gaiyo;
