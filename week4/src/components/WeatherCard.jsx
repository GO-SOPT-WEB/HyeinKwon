import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { St } from "./CardStyle";

import { WEATER_TYPE } from "../constants/WeatherType";
import Skeleton from "./Skeleton";

//주간 부분 카드 나타나기
const WeatherCard = () => {
  const { area } = useParams();
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const weatherInfo = () => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((response) => {
          setWeather(response.data.list);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const weatherList = weather.filter((_, index) => (index - 2) % 8 === 0);

  useEffect(() => {
    weatherInfo();
  }, [area]);

  return (
    <Wrapper>
      {isLoading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          {weatherList.map((data) => {
            const weatherDescription =
              data.weather?.length > 0 ? data.weather[0].description : "";
            const imgSrc = WEATER_TYPE.find(
              (data) => data.description === weatherDescription
            );
            return (
              <St.CardWrapper key={data.dt}>
                <St.CardHeader>
                  <h3>{data?.dt_txt.slice(5, 10)}</h3>
                </St.CardHeader>
                <St.CardImg src={imgSrc.imgURL} alt={imgSrc.description} />
                <St.CardDesCription>
                  <span>온도</span>
                  <p>{data.main?.temp}</p>
                </St.CardDesCription>

                <St.CardDesCription>
                  <span>체감 온도</span>
                  <p>{data.main?.feels_like}</p>
                </St.CardDesCription>

                <St.CardDesCription>
                  <span>최저/최고</span>
                  <p>
                    {data.main?.temp_min}/{data.main?.temp_max}
                  </p>
                </St.CardDesCription>

                <St.CardDesCription>
                  <span>구름</span>
                  <p>{data.clouds?.all}%</p>
                </St.CardDesCription>
              </St.CardWrapper>
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default WeatherCard;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_yellow};
  flex-wrap: wrap;
`;
