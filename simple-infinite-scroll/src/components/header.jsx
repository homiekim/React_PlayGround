import React from "react";
import styled from "@emotion/styled";

const TitleContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Title = styled.div`
 font-size : 2em;
 font-family: sans-serif;
 font-weight: bold;
`;

const Header = () => {
  return (
    <TitleContainer>
      <Title> Infinite Movie Information!!</Title>
    </TitleContainer>
  );
};

export default Header;
