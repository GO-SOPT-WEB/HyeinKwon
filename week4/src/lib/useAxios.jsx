/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
import { useState, useEffect } from "react";
import axios from "axios";

//커스텀훅
export const useAxios = (timeRange, area) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let WEATHER_URL;

  switch (timeRange) {
    case "day":
      WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;

      break;

    case "week":
      WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;
      break;

    default:
      break;
  }

  const weatherInfo = () => {
    try {
      setIsLoading(true);
      axios.get(WEATHER_URL).then((response) => {
        if (timeRange === "week") {
          setWeather(response.data.list);
        } else {
          setWeather(response.data);
        }
        setIsLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    weatherInfo();
  }, [timeRange, area]);

  return {
    weather,
    isLoading,
  };
};
