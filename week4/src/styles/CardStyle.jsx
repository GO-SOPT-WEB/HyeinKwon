import styled from "styled-components";

export const St = {
  CardWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 15rem;

    gap: 1rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.coral};
  `,

  CardHeader: styled.header`
    h3 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 30px;
    }
  `,

  CardImg: styled.img`
    width: 10rem;
    border-radius: 1rem;
  `,

  CardDesCription: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: 0.5rem;
  `,
};
