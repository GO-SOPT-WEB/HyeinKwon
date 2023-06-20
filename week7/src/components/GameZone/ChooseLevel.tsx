import { useResetRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  checkScoreState,
  randomListState,
  scoreState,
} from "../../recoil/Atoms/Atom";
import {
  EasyRandomList,
  HardRandomList,
  NormalRandomList,
} from "../../model/ImgData";
import { LevelContainer } from "../../styles/Style";

export default function ChooseLevel() {
  const setScore = useSetRecoilState(scoreState);
  const setRandomList = useSetRecoilState(randomListState);
  const checkScore = useResetRecoilState(checkScoreState);

  //각 모드 선택 시, 카드 정렬(개수에 맞게) + 난이도 설정
  const EasyMode = () => {
    setScore(5);
    checkScore();
    setRandomList(EasyRandomList);
  };

  const NormalMode = () => {
    setScore(7);
    checkScore();
    setRandomList(NormalRandomList);
  };

  const HardMode = () => {
    setScore(9);
    checkScore();
    setRandomList(HardRandomList);
  };
  return (
    <>
      <LevelContainer>
        <LevelBtn onClick={EasyMode}>Easy</LevelBtn>
        <LevelBtn onClick={NormalMode}>Normal</LevelBtn>
        <LevelBtn onClick={HardMode}>Hard</LevelBtn>
      </LevelContainer>
    </>
  );
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
