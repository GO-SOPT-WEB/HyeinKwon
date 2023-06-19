import React, { useState } from "react";
import styled from "styled-components";
import { RandomImgList } from "../data/ImgData";

export default function ChooseLevel({ level, score, updateScore }) {
  const selectArray = () => {
    let LevelImgList = [];
    switch (level) {
      case "EASY":
        LevelImgList = RandomImgList.slice(0, 5);
        break;

      case "NORMAL":
        LevelImgList = RandomImgList.slice(0, 7);
        break;

      default:
        LevelImgList = RandomImgList.slice(0, 9);
    }

    const RandomList = [...LevelImgList, ...LevelImgList]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));

    updateScore(RandomList.length / 2, RandomList);

    return RandomList;
  };

  return <LevelBtn onClick={selectArray}>{level}</LevelBtn>;
}

const LevelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  margin: 20px;

  border: none;
  border-radius: 5px;

  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightpink};

  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 2px coral;
`;
