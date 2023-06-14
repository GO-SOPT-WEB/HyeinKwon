import React from "react";
import { styled } from "styled-components";

//에러페이지
const Error = () => {
  return <ErrorWrapper>Error 404 찾을 수 없는 페이지 입니다! </ErrorWrapper>;
};

export default Error;

const ErrorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 64px;
  position: absolute;
  width: 100%;
  height: 100%;
`;
