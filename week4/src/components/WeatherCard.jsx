import { styled } from "styled-components";
import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeatherCard = (props) => {
  const { area } = useParams();
  const [data, setData] = useState({});

  const weatherInfo = () => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(import.meta.env.VITE_APP_WEATHER);
  useEffect(() => {
    weatherInfo();
  }, [area]);

  return (
    <>
      <St.CardWrapper>
        <h2>안녕!</h2>
        <h3>{name}</h3>
        {/* <img src={}/> */}
        <p></p>
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
