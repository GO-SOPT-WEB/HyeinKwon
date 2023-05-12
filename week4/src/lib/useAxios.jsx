import { useState, useEffect } from "react";
import axios from "axios";
import { WEATER_TYPE } from "../constants/WeatherType";

//커스텀훅
export const useAxios = (area) => {
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

  return {
    weather,
    isLoading,
    imgSrc,
  };
};