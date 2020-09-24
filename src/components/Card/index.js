import React from "react";

import { Wrapper, ImgWrap, Header, Price, Address, Footer } from "./styles";

const Card = ({ loading, address, homeowner, price, photoURL }) => {
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
    .format(price)
    .split(".")[0];

  return (
    <Wrapper loading={loading}>
      <ImgWrap loading={loading}>
        <img src={photoURL} alt="house" />
      </ImgWrap>
      <div>
        <Header>
          <Price loading={loading}>{formatedPrice}</Price>
          <Address loading={loading}>{address}</Address>
        </Header>
        <Footer loading={loading}>
          <p>Owner</p>
          <p>{homeowner}</p>
        </Footer>
      </div>
    </Wrapper>
  );
};

export default Card;
