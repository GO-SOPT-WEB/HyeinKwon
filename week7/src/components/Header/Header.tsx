import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Reset from "./Reset";
import { Header as HeaderWrapper } from "../../styles/Style";
import { useRecoilValue } from "recoil";
import { checkScoreState, scoreState } from "../../recoil/Atoms/Atom";
import "../../styles/neon.css";

function Header() {
  const checkScore = useRecoilValue(checkScoreState);
  const score = useRecoilValue(scoreState);

  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scoreRef.current.classList.add("neon");
    setTimeout(() => scoreRef.current.classList.remove("neon"), 1000);
  }, [checkScore]);

  return (
    <>
      <HeaderWrapper>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <St.Score ref={scoreRef}>
          {checkScore} : {score}
        </St.Score>
        <Reset />
      </HeaderWrapper>
    </>
  );
}

export default Header;

const St = {
  Score: styled.div`
    display: flex;
    justify-content: space-around;

    width: 50%;
    margin-top: 30px;

    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.lightpink};
    font-size: 50px;
  `,
};
