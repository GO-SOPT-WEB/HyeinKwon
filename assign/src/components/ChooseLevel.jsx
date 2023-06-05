import React, { useState } from "react";
import styled from "styled-components";

export default function ChooseLevel({ level, onClickBtn }) {
  return <LevelBtn onClick={onClickBtn}>{level}</LevelBtn>;
}

const LevelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  margin: 20px;

  background-color: ${({ theme }) => theme.colors.lightpink};

  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 2px coral;
`;
