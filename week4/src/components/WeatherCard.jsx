import { styled } from "styled-components";
import React, { memo } from "react";

const WeatherCard = ({ cityName }) => {
  return (
    <>
      <St.CardWrapper>
        <h2>안녕!</h2>
        <p>{cityName}</p>
      </St.CardWrapper>
    </>
  );
};

export default WeatherCard;

const St = {
  CardWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    padding: 2rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.coral};

    h2 {
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};
