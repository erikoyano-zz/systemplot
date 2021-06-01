import React from "react";
import "./Jobs.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Career from "../pages/Career";

function Jobs() {
  return (
    <div className="block-featureblock" id="jobs">
      <div className="container-fluid">
        <Fade duration={3000}>
          <h1 className="title-container">採用情報</h1>
          <div className="about-title">
            <h2>
              採用については<Link to="/career">こちら</Link>
              をクリックしてください。
            </h2>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Jobs;
