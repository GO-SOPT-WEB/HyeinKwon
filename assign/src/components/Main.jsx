import React, { useState, useEffect, useRef } from "react";
import {
  Header,
  Score,
  Container,
  LevelContainer,
  CardWrapper,
  Reset,
} from "../styles/Style";

import ChooseLevel from "./ChooseLevel";

import Card from "./Cards";
import { EasyRandomList } from "../data/ImgData";

// import { selectArray } from "../utils/selectArray";

import "../styles/neon.css";
import Modal from "./Modal/Modal";

export default function Main() {
  const [score, setScore] = useState(5);
  const [checkScore, setCheckScore] = useState(0);
  const [randomList, setRandomList] = useState(EasyRandomList);
  const [turns, setTurns] = useState(0);
  const [selectFirst, setSelectFirst] = useState(null);
  const [selectSecond, setSelectSecond] = useState(null);
  const [isClicked, setIsCliked] = useState(false);

  const level = ["EASY", "NORMAL", "HARD"];

  //모달띄우기
  const [isOpen, setIsOpen] = useState(false);

  //score가 달라지면 네온사인 나오는 애니메이션
  const scoreRef = useRef();

  useEffect(() => {
    if (score === 0) return;

    scoreRef.current.classList.add("neon");
    setTimeout(() => scoreRef.current.classList.remove("neon"), 1000);
  }, [checkScore]);

  //level에 따라 score가 올라가게 하는 함수
  const updateScore = (newScore, array) => {
    setScore(newScore);
    setRandomList(array);
    setCheckScore(0);
  };

  const handleChoice = (image) => {
    selectFirst ? setSelectSecond(image) : setSelectFirst(image);
  };

  //두개 카드 비교하기
  useEffect(() => {
    if (checkScore === score) {
      //모달 띄우기(다 맞춘 경우)
      setIsOpen(true);
      //자동으로 닫히기 (close버튼 누르지 않은 경우)
      setTimeout(() => {
        setIsOpen(false);
      }, 8000);
    }
    if (selectFirst && selectSecond) {
      setIsCliked(true);
      //카드를 맞추었을 때,
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

  //모달 닫기
  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <Score ref={scoreRef}>
          {checkScore} : {score}
        </Score>
        <Reset handleReset={handleReset}>Reset</Reset>
      </Header>
      <Container>
        <LevelContainer>
          {level.map((data, index) => (
            <ChooseLevel updateScore={updateScore} level={data} key={index} />
          ))}
        </LevelContainer>
        {isOpen && <Modal modalClose={modalClose} />}
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
