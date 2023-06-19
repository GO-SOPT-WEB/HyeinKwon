import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

export default function ({ modalClose }) {
  return ReactDom.createPortal(
    <>
      <ModalWrapper>
        💛🧡💖축하합니다! 다 맞췄어용💖🧡💛
        <GobacktoBtn onClick={modalClose}>게임으로 돌아가기!</GobacktoBtn>
      </ModalWrapper>
    </>,
    document.getElementById("modal")
  );
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 9999;

  width: 500px;
  height: 200px;

  border-radius: 5%;
  border: 5px solid ${({ theme }) => theme.colors.pink};
  box-shadow: 3px 3px 2px ${({ theme }) => theme.colors.black};

  top: 40%;
  left: 35%;

  background-color: ${({ theme }) => theme.colors.lightpink};

  font-size: 25px;

  @font-face {
    font-family: "TTWanjudaedunsancheB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  font-family: "TTWanjudaedunsancheB";
`;

const GobacktoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  margin-top: 20px;

  border-radius: 5%;
  border: 5px solid ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.white};

  font-size: 20px;
  color: ${({ theme }) => theme.colors.pink};
  text-shadow: 2px 2px 2px coral;
`;
