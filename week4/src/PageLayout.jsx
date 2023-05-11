import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SearchCity from "./components/SearchCity";

const PageLayout = ({ children }) => {
  return (
    <St.PageWrapper>
      <Header />
      <SearchCity />
      <St.PageWrapper>{children}</St.PageWrapper>
    </St.PageWrapper>
  );
};

export default PageLayout;

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    background-color: ${({ theme }) => theme.colors.light_yellow};
  `,
};
