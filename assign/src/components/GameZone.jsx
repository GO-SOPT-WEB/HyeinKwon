import { useRecoilState } from "recoil";
import { Container, CardWrapper } from "../styles/Style";

import ChooseLevel from "./ChooseLevel";
import Card from "./Cards";
import Header from "./Header";
import CompareCard from "./CompareCard";

import Modal from "./Modal/Modal";

import {
  isOpenState,
  randomListState,
  selectFirstState,
  selectSecondState,
} from "../recoil/Atoms/Atom";

export default function GameZone() {
  const [randomList, setRandomList] = useRecoilState(randomListState);
  const [selectFirst, setSelectFirst] = useRecoilState(selectFirstState);
  const [selectSecond, setSelectSecond] = useRecoilState(selectSecondState);

  //모달띄우기
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  //모달 닫기
  const modalClose = () => {
    setIsOpen(false);
  };

  const handleChoice = (image) => {
    selectFirst ? setSelectSecond(image) : setSelectFirst(image);
  };

  return (
    <>
      <Header />
      <Container>
        <ChooseLevel />
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
