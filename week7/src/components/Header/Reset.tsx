import {  useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  checkScoreState,
  isClickedState,
  randomListState,
  selectFirstState,
  selectSecondState,
  turnsState,
} from "../../recoil/Atoms/Atom";

export default function Reset() {
  const resetCheckScore = useResetRecoilState(checkScoreState);
  const resetSelectFirst = useResetRecoilState(selectFirstState);
  const resetSelectSecond = useResetRecoilState(selectSecondState);
  const resetTurns = useResetRecoilState(turnsState);
  const resetIsClicked = useResetRecoilState(isClickedState);

  const setRandomList = useSetRecoilState(randomListState);

  const handleReset = () => {
    resetCheckScore();
    resetSelectFirst();
    resetSelectSecond();
    resetTurns();
    resetIsClicked();
    setRandomList((prevRandomList) =>
      prevRandomList.map((image) => ({ ...image, matched: false }))
    );
  };

  const handleResetBtn = () => {
    handleReset();
  };
  return <Container onClick={handleResetBtn}>RESET</Container>;
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 5px solid ${({ theme }) => theme.colors.lightpink};

  font-size: 20px;
  color: ${({ theme }) => theme.colors.lightpink};
  text-shadow: 2px 2px 2px coral;
`;
