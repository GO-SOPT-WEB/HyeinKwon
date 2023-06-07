import React from "react";
import { CardContainer, CardImg } from "../../styles/Style";
import preview from "../../assets/preview.gif";
import { useRecoilState } from "recoil";
import { isClickedState } from "../../recoil/Atoms/Atom";

export interface Image {
  id: number;
  card: string;
  matched: boolean;
}

interface OwnProps {
  image: Image;
  handleChoice(image: Image): void;
  flipped: boolean;
}

const Card: React.FC<OwnProps> = ({ image, handleChoice, flipped }) => {
  const [isClicked, setIsCliked] = useRecoilState(isClickedState);

  const handleClick = () => {
    if (!isClicked) {
      handleChoice(image);
    }
  };

  return (
    <CardContainer className={flipped ? "flipped" : ""}>
      <CardImg className="front" src={image.card} />
      <CardImg
        onClick={handleClick}
        className="back"
        src={preview}
        alt="카드 커버"
      />
    </CardContainer>
  );
};

export default Card;
