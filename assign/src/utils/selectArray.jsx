import React from "react";
import { RandomImgList } from "../data/ImgData";

function selectArray({ level }) {
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

  return RandomList;
}

export default selectArray;
