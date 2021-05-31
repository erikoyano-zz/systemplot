import React from "react";
import "./About.css";
import aboutImg from "../../images/desktop.png";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="block-featureblock" id="about">
      <div className="container-fluid">
        <Fade duration={3000}>
          <h1 className="title-container">事業内容</h1>
          <h2 className="about-title">
            当社ではソフトウェア開発、及コンサルテーションを主に扱っております。
          </h2>
          <div className="intro-container">
            <img className="about-pic" alt="about" src={aboutImg} />
            <div className="about-text">
              <h2>ソフトウェア開発</h2>
              <h3>
                事務分野から科学技術分野まで、あらゆる産業分野にわたって
                、ユーザーニーズにお応えいたします。クライアント、サーバー、
                大型汎用機を問わず、高品質なソフトウェアを保証いたします。
              </h3>
              <h2>コンサルテーション</h2>
              <h3>
                ユーザーの抱える諸問題に対し、トータルな視点で適切なアドバイス
                を提供いたします。コンピュータシステムの構築、運用等、
                情報システムにおける総合的なコンサルティングを行います。
              </h3>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default About;
