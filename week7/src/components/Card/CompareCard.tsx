import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  checkScoreState,
  isClickedState,
  isOpenState,
  randomListState,
  scoreState,
  selectFirstState,
  selectSecondState,
  turnsState,
} from "../../recoil/Atoms/Atom";

function CompareCard() {
  const [checkScore, setCheckScore] = useRecoilState(checkScoreState);
  const [score, setScore] = useRecoilState(scoreState);
  const [isClicked, setIsCliked] = useRecoilState(isClickedState);
  const [turns, setTurns] = useRecoilState(turnsState);
  const [selectFirst, setSelectFirst] = useRecoilState(selectFirstState);
  const [selectSecond, setSelectSecond] = useRecoilState(selectSecondState);
  const [randomList, setRandomList] = useRecoilState(randomListState);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const selectFirstCardReset = useResetRecoilState(selectFirstState);
  const selectSecondCardReset = useResetRecoilState(selectSecondState);

  const resetTurn = () => {
    selectFirstCardReset();
    selectSecondCardReset();
    setTurns((turns) => turns + 1);
    setIsCliked(false);
  };

  useEffect(() => {
    if (checkScore === score) {
      setIsOpen(true);
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

  return null;
}

export default CompareCard;
