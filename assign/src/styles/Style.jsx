import styled from "styled-components";

// 메인부분
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 45px 50px;

  border-top-left-radius: 3%;
  border-top-right-radius: 3%;

  background-color: ${({ theme }) => theme.colors.pink};

  font-size: 40px;
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-around;

  width: 50%;
  margin-top: 30px;

  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.lightpink};
  font-size: 50px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const LevelContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.article`
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
`;

// Card.jsx 부분
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 300px;
  margin: 20px;

  border: 5px solid ${({ theme }) => theme.colors.blue};
  border-radius: 3%;
  box-shadow: 3px 3px 2px ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightblue};

  position: relative;

  .front {
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
  }

  &.flipped .front {
    transform: rotateX(0deg);
    transition-delay: 0.2s;
  }

  .back {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  &.flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`;

export const CardImg = styled.img`
  width: 150px;
  height: 200px;

  border-radius: 3%;
`;
