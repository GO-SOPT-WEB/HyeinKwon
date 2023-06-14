import React, { useState, memo } from "react";
import { St } from "../styles/SearchCityStyle";

import { useNavigate } from "react-router-dom";

const SearchCity = () => {
  const [area, setArea] = useState("");
  const [timeRange, setTimeRange] = useState("day");

  const navigate = useNavigate();

  //지역 검색
  const handleSearchArea = (e) => {
    const { value } = e.currentTarget;
    setArea(value);
  };

  //오늘, 주간 구분
  const handleDayWeek = (e) => {
    const { value } = e.currentTarget;
    setTimeRange(value);
  };

  const handleWeatherPage = () => {
    navigate(`/${timeRange}/${area}`);
  };

  return (
    <St.FormWapper>
      <St.WeatherSelect onChange={handleDayWeek}>
        <option value="day">오늘</option>
        <option value="week">주간</option>
      </St.WeatherSelect>
      <St.WeatherInput
        placeholder="날씨를 입력해주세요(영어로 도시 이름!)"
        onChange={handleSearchArea}
      />
      <St.WeatherSearch onClick={handleWeatherPage}>날씨 검색</St.WeatherSearch>
    </St.FormWapper>
  );
};

export default memo(SearchCity);
