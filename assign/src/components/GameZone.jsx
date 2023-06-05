import React, { useEffect, useRef } from "react";
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

import "../styles/neon.css";
import Modal from "./Modal/Modal";
import CompareCard from "./CompareCard";

import { useRecoilState } from "recoil";

import {
  checkScoreState,
  isClickedState,
  isOpenState,
  randomListState,
  scoreState,
  selectFirstState,
  selectSecondState,
  turnsState,
} from "../recoil/Atoms/Atom";

export default function GameZone() {
  const [score, setScore] = useRecoilState(scoreState);
  const [checkScore, setCheckScore] = useRecoilState(checkScoreState);
  const [randomList, setRandomList] = useRecoilState(randomListState);
  const [turns, setTurns] = useRecoilState(turnsState);
  const [selectFirst, setSelectFirst] = useRecoilState(selectFirstState);
  const [selectSecond, setSelectSecond] = useRecoilState(selectSecondState);
  const [isClicked, setIsCliked] = useRecoilState(isClickedState);

  //모달띄우기
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  //모달 닫기
  const modalClose = () => {
    setIsOpen(false);
  };

  //score가 달라지면 네온사인 나오는 애니메이션
  const scoreRef = useRef();

  useEffect(() => {
    scoreRef.current.classList.add("neon");
    setTimeout(() => scoreRef.current.classList.remove("neon"), 1000);
  }, [checkScore]);

  const handleChoice = (image) => {
    selectFirst ? setSelectSecond(image) : setSelectFirst(image);
  };

  return (
    <>
      <Header>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <Score ref={scoreRef}>
          {checkScore} : {score}
        </Score>
        <Reset />
      </Header>
      <Container>
        <LevelContainer>
          <ChooseLevel />
        </LevelContainer>
        {isOpen && <Modal modalClose={modalClose} />}
        <CompareCard />
        <CardWrapper>
          {randomList.map((image) => (
            <Card
              key={image.id}
              image={image}
              handleChoice={handleChoice}
              flipped={
                image === selectFirst || image === selectSecond || image.matched
              }
            />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}
