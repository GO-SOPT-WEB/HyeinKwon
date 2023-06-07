import { useRecoilState } from "recoil";
import { Container, CardWrapper } from "../../styles/Style";

import ChooseLevel from "./ChooseLevel";

import Header from "../Header/Header";
import CompareCard from "../Card/CompareCard";
import Card, { Image } from "../Card/Card";

import Modal from "../Modal/Modal";

import {
  isOpenState,
  randomListState,
  selectFirstState,
  selectSecondState,
} from "../../recoil/Atoms/Atom";

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

  const handleChoice = (image: Image) => {
    selectFirst ? setSelectSecond(image) : setSelectFirst(image);
  };

  type SelectImage = Image;
  console.log(selectFirst);
  console.log(selectSecond);
  return (
    <>
      <Header />
      <Container>
        <ChooseLevel />
        {isOpen && <Modal modalClose={modalClose} />}
        <CompareCard />
        <CardWrapper>
          {randomList.map((image: SelectImage) => (
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
