import React, { useState, useEffect, useRef } from "react";
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

import "../styles/neon.css";
import useDidMountEffect from "./useDidMountEffect";
import Modal from "./Modal/Modal";

export default function Main() {
  const [score, setScore] = useState(5);
  const [checkScore, setCheckScore] = useState(0);
  const [randomList, setRandomList] = useState(EasyRandomList);
  const [turns, setTurns] = useState(0);
  const [selectFirst, setSelectFirst] = useState(null);
  const [selectSecond, setSelectSecond] = useState(null);
  const [isClicked, setIsCliked] = useState(false);

  //모달띄우기
  const [isOpen, setIsOpen] = useState(false);

  //score가 달라지면 네온사인 나오는 애니메이션
  const scoreRef = useRef();

  useDidMountEffect(() => {
    scoreRef.current.classList.add("neon");
    setTimeout(() => scoreRef.current.classList.remove("neon"), 1000);
  }, [checkScore]);

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
        <Reset handleReset={handleReset} />
      </Header>
      <Container>
        <LevelContainer>
          <ChooseLevel onClickBtn={EasyMode} level={"Easy"}></ChooseLevel>
          <ChooseLevel onClickBtn={NormalMode} level={"Normal"}></ChooseLevel>
          <ChooseLevel onClickBtn={HardMode} level={"Hard"}></ChooseLevel>
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
