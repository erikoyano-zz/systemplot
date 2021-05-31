import React from "react";
import "./herosection.css";
import { Carousel } from "antd";
import image1 from "../../images/slider1_background.png";
import image2 from "../../images/slider2_background.png";
import image3 from "../../images/slider3_background.png";
import image4 from "../../images/tagline-plot.png";
import image5 from "../../images/logo-clear.png";
import Fade from "react-reveal/Fade";

function HeroSection() {
  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
  };

  return (
    <Fade duration={3000}>
      <div className="home" id="home">
        <Carousel className="carousel" autoplay effect="fade">
          <div>
            <img className="logo-front" src={image5} alt="logo" />
            <img
              clasName="main"
              src={image1}
              alt="gradient"
              style={contentStyle}
            />
          </div>
          <div>
            <Fade duration={3000}>
              <img src={image4} className="plot-text" alt="plot-text" />
            </Fade>
            <img
              clasName="main"
              src={image3}
              alt="think"
              style={contentStyle}
            />
          </div>
          <div>
            <div className="herotext-container">
              <h1>Think Global.</h1>
              <br />
              <h2> ヒト・情報・技術をつなげる</h2>
            </div>
            <img clasName="main" src={image2} alt="plot" style={contentStyle} />
          </div>
        </Carousel>
      </div>
    </Fade>
  );
}

export default HeroSection;
