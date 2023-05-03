import React, { useState, useEffect } from "react";
import {
  Header,
  Score,
  Container,
  LevelContainer,
  CardWrapper,
} from "../styles/Style";

import Reset from "./Reset";
import ChooseLevel from "./ChooseLevel";

import Card from "./Cards";
import { EasyRandomList, NormalRandomList, HardRandomList } from "./ImgData";

export default function Main() {
  const [score, setScore] = useState(5);
  const [checkScore, setCheckScore] = useState(0);
  const [randomList, setRandomList] = useState(EasyRandomList);
  const [turns, setTurns] = useState(0);
  const [selectFirst, setSelectFirst] = useState(null);
  const [selectSecond, setSelectSecond] = useState(null);
  const [isClicked, setIsCliked] = useState(false);

  //각 모드 선택 시, 카드 정렬(개수에 맞게) + 난이도 설정
  const EasyMode = () => {
    setScore("5");
    setCheckScore(0);
    setRandomList(EasyRandomList);
  };

  const NormalMode = () => {
    setScore("7");
    setCheckScore(0);
    setRandomList(NormalRandomList);
  };

  const HardMode = () => {
    setScore("9");
    setCheckScore(0);
    setRandomList(HardRandomList);
  };

  const handleChoice = (image) => {
    selectFirst ? setSelectSecond(image) : setSelectFirst(image);
  };

  //두개 카드 비교하기
  useEffect(() => {
    if (selectFirst && selectSecond) {
      setIsCliked(true);
      if (selectFirst.card === selectSecond.card) {
        setCheckScore((checkScore) => checkScore + 1);
        setRandomList((prevRandomList) => {
          return prevRandomList.map((image) => {
            if (image.card == selectFirst.card) {
              return { ...image, matched: true };
            } else {
              return image;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [selectFirst, selectSecond]);

  //고른 카드 reset하기 (두개 고르고 다시 원점)
  const resetTurn = () => {
    setSelectFirst(null);
    setSelectSecond(null);
    setTurns((turns) => turns + 1);
    setIsCliked(false);
  };

  //Reset버튼
  const handleReset = () => {
    setSelectFirst(null);
    setSelectSecond(null);
    setTurns(0);
    setCheckScore(0);
    setIsCliked(false);
    setRandomList((prevRandomList) =>
      prevRandomList.map((image) => ({ ...image, matched: false }))
    );
  };
  return (
    <>
      <Header>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <Score>
          {checkScore} : {score}
          <Reset handleReset={handleReset} />
        </Score>
      </Header>
      <Container>
        <LevelContainer>
          <ChooseLevel onClickBtn={EasyMode} level={"Easy"}></ChooseLevel>
          <ChooseLevel onClickBtn={NormalMode} level={"Normal"}></ChooseLevel>
          <ChooseLevel onClickBtn={HardMode} level={"Hard"}></ChooseLevel>
        </LevelContainer>
        <CardWrapper>
          {randomList.map((image) => (
            <Card
              key={image.id}
              image={image}
              handleChoice={handleChoice}
              flipped={
                image === selectFirst || image === selectSecond || image.matched
              }
              isClicked={isClicked}
            />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}
