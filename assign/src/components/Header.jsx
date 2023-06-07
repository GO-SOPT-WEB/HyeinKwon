import React, { useEffect, useRef } from "react";
import Reset from "./Reset";
import { Header as HeaderWrapper, Score } from "../styles/Style";
import { useRecoilState } from "recoil";
import { checkScoreState, scoreState } from "../recoil/Atoms/Atom";
import "../styles/neon.css";

function Header() {
  const [checkScore, setCheckScore] = useRecoilState(checkScoreState);
  const [score, setScore] = useRecoilState(scoreState);
  const scoreRef = useRef();

  useEffect(() => {
    scoreRef.current.classList.add("neon");
    setTimeout(() => scoreRef.current.classList.remove("neon"), 1000);
  }, [checkScore]);

  return (
    <>
      <HeaderWrapper>
        💖작고 소즁한 솜뭉찍을 찾아라!💖
        <Score ref={scoreRef}>
          {checkScore} : {score}
        </Score>
        <Reset />
      </HeaderWrapper>
    </>
  );
}

export default Header;
