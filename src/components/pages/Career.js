import React from "react";
import "./Career.css";
import careerimg from "../../images/career-banner.jpg";
import { Button } from "antd";
import { Link as Link2 } from "react-router-dom";

function Career() {
  return (
    <>
      <img className="career-banner" src={careerimg} alt="banner" />
      <div className="block-featureblock">
        <div className="career-container-fluid">
          <h1 className="title-container">募集要項</h1>
          <h2 className="career-text-container">
            汎用系システムで確固としたスキル・ノウハウを築く当社。
            今後の採用でオープン系・ウェブ系に強いメンバーを育て、会社としても
            新スタートを切ります。
          </h2>
        </div>
        <div className="career-container-fluid">
          <h2 className="title-container">仕事内容</h2>
          <p className="career-text-container">
            オープン・ウェブ系のシステム開発
            。システムの設計・開発・運用までトータルに行う当社。
            そのため、システム開発の実制作から最上流のコンサルティング・設計まで学べる環境です。
            <br />
            <br />
            ★あなたにお任せするのは
            オープン系・ウェブ系を今後の主力分野とするため、新携帯コンテンツ開発など、積極的に案件を用意します。
            社内の開発メンバーと共に、皆さんに成長していただき、ゆくゆくはこの分野をリードしていって欲しいと考えています。
            <br />
            <br />
            ※この分野で実務経験をお持ちの方は、即戦力として活躍いただけます。
          </p>
        </div>
        <div className="career-container-fluid">
          <h2 className="title-container">応募資格</h2>
          <p className="career-text-container">
            高卒以上40歳位まで　★職種・業種・言語、すべて未経験でOKです！　※経験者は優遇
            <br />
            <br />
            【具体的には】 エンジニア・言語とも未経験の方
            新卒、第二新卒の方も大歓迎！
            <br />
            これまでにも実務経験のない先輩が多数入社しています。
            あなたの学びたい意欲を、会社を上げて最大限応援します。
            オープン系・ウェブ系経験者の方 <br />
            経験者の方は、即戦力として優遇します。
          </p>
        </div>
        <div className="career-container-fluid">
          <h2 className="title-container">勤務地</h2>
          <p className="career-text-container">
            都内近郊：取引先での勤務 <br />
            （最初の案件はもちろん先輩と一緒に。その後は案件やあなたの志向によって考慮）
          </p>
        </div>
        <div className="career-container-fluid">
          <h2 className="title-container">待遇・福利厚生</h2>
          <p className="career-text-container">
            昇給1 賞与2　★決算賞与あり 交通全給 社保完備 手当/残業・特別・資格
          </p>
        </div>
        <div className="career-container-fluid">
          <h2 className="title-container">休日・休暇</h2>
          <p className="career-text-container">
            完全週休２日（土日）　オフはきっちり休める会社です。
            <br /> 年間休日121日 祝日 夏季 冬季 有給 慶弔
          </p>
        </div>

        <Button
          style={{
            borderColor: "grey",
            margin: "auto",
            display: "grid",
            width: "10%",
            textAlign: "center",
          }}
          href="/"
        >
          ホームへ戻る
        </Button>
      </div>
    </>
  );
}

export default Career;
