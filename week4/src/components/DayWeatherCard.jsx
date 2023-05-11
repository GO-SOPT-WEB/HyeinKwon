import { styled } from "styled-components";
import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { WEATER_TYPE } from "../constants/WeatherType";

const DayWeatherCard = (props) => {
  const { area } = useParams();
  const [weather, setWeather] = useState({});

  const weatherInfo = () => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
          console.log(weather.main.temp);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    weatherInfo();
  }, [area]);

  return (
    <>
      <St.CardWrapper>
        <header>
          <h3></h3>
        </header>

        <h3>{name}</h3>
        <div>
          <span>온도</span>
          <p></p>
        </div>
        <p></p>
      </St.CardWrapper>
    </>
  );
};

export default DayWeatherCard;

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
