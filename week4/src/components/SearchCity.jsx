import React, { useCallback, useState, memo } from "react";
import { St } from "../styles/SearchCityStyle";
import WeatherCard from "./WeatherCard";

const SearchCity = () => {
  const [cityName, setCityName] = useState("");
  const [showWeatherCard, setShowWeatherCard] = useState(false);

  const handleChange = useCallback((e) => {
    setCityName(e.target.value);
  }, []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log(cityName);
    setShowWeatherCard(true);
    // WeatherCard 컴포넌트에 value 값을 전달하기
  }, []);

  return (
    <St.FormWapper>
      <St.WeatherSelect>
        <St.SelectToday value="today">오늘</St.SelectToday>
        <St.SelectWeek value="week">주간</St.SelectWeek>
      </St.WeatherSelect>
      <St.WeatherInput
        placeholder="날씨를 입력해주세요"
        onChange={handleChange}
        onClick={() => {
          setShowWeatherCard(false);
          setCityName("");
        }}
      />
      <St.WeatherSearch onClick={handleSearch}>날씨 검색</St.WeatherSearch>
      {showWeatherCard && <WeatherCard cityName={cityName} />}
    </St.FormWapper>
  );
};

export default memo(SearchCity);
