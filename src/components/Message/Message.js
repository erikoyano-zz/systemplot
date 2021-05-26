import React from "react";
import "./Message.css";
import Fade from "react-reveal/Fade";
import tree from "../../images/tree.png";

function Message() {
  return (
    <div className="block-featureblock" id="message">
      <div className="container-fluid">
        <Fade duration={3000}>
          <div className="title-container">
            <h1 id="shokai">社長挨拶</h1>
          </div>
          <div className="intro-container">
            <img className="profile" alt="profile" src={tree} />
            <div className="text">
              <h1 className="intro-title">
                ２１世紀の高度情報化社会を人間らしく自由に生き抜くために、
                私たち株式会社システムプロットは確かな技術力をもとに、
                豊かで、創造的なコンピュータシステムを提供いたします。
              </h1>
              <p>
                ハードウェアの導入からシステム設計、メンテナンスまでの
                総合的な情報戦略は一つの物語に例えることができます。
                ユーザーの抱えるさまざまな要望（テーマ）を私たちの
                ノウハウでプロットし、完成した物語を創造いたします。
                私たちはユーザーの物語作りの信頼できるパートナーとして
                常に最良の答えを提供いたします。
                <br />
                私たちは『情熱』、『自由』、『創造性』、『技術力』を基本理念として
                社員一人一人の能力と個性を尊重し、社会に貢献する情報処理サービスの
                エキスパートを目指します。
              </p>
              <p className="name">代表取締役　小谷野玲司</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Message;
