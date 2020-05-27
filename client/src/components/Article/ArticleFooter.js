import React, { useState } from "react";
import styled from "styled-components";

const ArticleFooter = ({ detail, addProduct, history }) => {
  const [heart, setHeart] = useState(false);
  const price = parseInt(detail.price).toLocaleString();

  const clickHeart = () => {
    setHeart(!heart);
    let object = {};
    object.id = localStorage.getItem("productId");
    object.heart = !heart;
    localStorage.setItem("itemLike", JSON.stringify(object));
  };

  return (
    <ArticleFooterWrapper>
      <div>
        <i
          className={`${heart ? "fas" : "far"} fa-heart`}
          onClick={clickHeart}
        ></i>
        <div className="price-wrapper">
          <p className="price">{price}원</p>
          <p className="price-offer">가격제안 불가</p>
        </div>
      </div>
      <button>채팅으로 거래하기</button>
    </ArticleFooterWrapper>
  );
};

export default ArticleFooter;

const ArticleFooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 6rem;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }

  .price-wrapper {
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .fa-heart {
    cursor: pointer;
    font-size: 1.2rem;
    color: gray;
  }

  .fas {
    color: #ff8a3d;
  }

  .price {
    font-size: 0.9rem;
    font-weight: bold;
  }

  .price-offer {
    margin-top: 0.5rem;
    color: gray;
    font-size: 0.9rem;
  }
  button {
    margin-right: 1rem;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${(props) => props.theme.primaryColor};
    :hover {
      background-color: ${(props) => props.theme.primaryDarker};
    }
    padding: 0.8rem;
    cursor: pointer;
    text-align: center;
  }
`;
