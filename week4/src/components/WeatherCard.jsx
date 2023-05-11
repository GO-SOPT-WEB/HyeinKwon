import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { St } from "./CardStyle";

import { WEATER_TYPE } from "../constants/WeatherType";

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
    <>
      {isLoading ? (
        <span>로딩중...</span>
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
                <img src={imgSrc.imgURL} alt={imgSrc.description} />
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
    </>
  );
};

export default WeatherCard;
