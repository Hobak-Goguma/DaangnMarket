import React from "react";
// import { Link } from "react-router-dom";

const FlatCardJungo = (props) => {
  return (
    <>
      {props.data.slice(props.a, props.b).map((v, i) => (
        <article className="flat-card" key={i}>
          {/* <Link to="/"> */}
          <div className="card-photo">
            <img src="./img/4단선반.jpg" alt="사진임둥" />
          </div>
          <div className="article-info">
            <div className="article-title-content">
              <span className="article-title">{v.name}</span>
            </div>
            <p className="article-region-name">주민동</p>
            <p className="article-price">{v.price.toLocaleString()}원</p>
            <section className="article-sub-info">
              <span className="article-watch">
                <img
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/like-8111aa74d4b1045d7d5943a901896992574dd94c090cef92c26ae53e8da58260.svg"
                  alt="하트"
                />
                0
              </span>
            </section>
          </div>
          {/* </Link> */}
        </article>
      ))}
    </>
  );
};

export default FlatCardJungo;
