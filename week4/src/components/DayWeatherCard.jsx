import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { St } from "./CardStyle";

import { WEATER_TYPE } from "../constants/WeatherType";

const DayWeatherCard = () => {
  const { area } = useParams();
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const weatherInfo = () => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const weatherDescription =
    weather.weather?.length > 0 ? weather.weather[0].description : "";
  const imgSrc = WEATER_TYPE.find(
    (data) => data.description === weatherDescription
  );

  useEffect(() => {
    weatherInfo();
  }, [area]);

  return (
    <>
      {isLoading ? (
        <span>로딩중...</span>
      ) : (
        <St.CardWrapper>
          <St.CardHeader>
            <h3>{weather.name}</h3>
          </St.CardHeader>
          <img src={imgSrc?.imgURL} alt={imgSrc?.description} />
          <St.CardDesCription>
            <span>온도</span>
            <p>{weather.main?.temp}</p>
          </St.CardDesCription>

          <St.CardDesCription>
            <span>체감 온도</span>
            <p>{weather.main?.feels_like}</p>
          </St.CardDesCription>

          <St.CardDesCription>
            <span>최저/최고</span>
            <p>
              {weather.main?.temp_min}/{weather.main?.temp_max}
            </p>
          </St.CardDesCription>

          <St.CardDesCription>
            <span>구름</span>
            <p>{weather.clouds?.all}%</p>
          </St.CardDesCription>
        </St.CardWrapper>
      )}
    </>
  );
};

export default DayWeatherCard;
