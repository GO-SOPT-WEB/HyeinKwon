import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <St.HeaderWrapper>
      <h1>🌞날씨가 좋았으면 좋게따!🌞</h1>
    </St.HeaderWrapper>
  );
};

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2rem;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.purple};

    & > h1 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export default Header;
