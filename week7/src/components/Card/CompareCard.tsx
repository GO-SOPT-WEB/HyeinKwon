import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

const CompareCard: React.FC = () => {
  const [checkScore, setCheckScore] = useRecoilState(checkScoreState);
  const [selectFirst, setSelectFirst] = useRecoilState(selectFirstState);
  const [selectSecond, setSelectSecond] = useRecoilState(selectSecondState);

  const score = useRecoilValue(scoreState);

  const setRandomList = useSetRecoilState(randomListState);
  const setIsOpen = useSetRecoilState(isOpenState);
  const setIsCliked = useSetRecoilState(isClickedState);
  const setTurns = useSetRecoilState(turnsState);

  const resetTurn = () => {
    setSelectFirst(null);
    setSelectSecond(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectFirst, selectSecond]);

  return null;
};

export default CompareCard;
