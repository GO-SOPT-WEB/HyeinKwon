import React, { useState, memo } from "react";
import { St } from "./SearchCityStyle";

import { useNavigate } from "react-router-dom";

const SearchCity = () => {
  const [area, setArea] = useState("");
  const [option, setOption] = useState("day");

  const navigate = useNavigate();

  //옵션 선택
  const handleSelect = (e) => {
    setOption(e.target.value);
  };

  //지역 검색
  const handleChange = (e) => {
    setArea(e.target.value);
  };

  //오늘, 주간 구분
  const handleClick = () => {
    switch (option) {
      case "day":
        navigate(`day/${area}`);
        break;
      case "week":
        navigate(`week/${area}`);
        break;
      default:
        break;
    }
  };

  return (
    <St.FormWapper>
      <St.WeatherSelect onChange={handleSelect}>
        <option value="day">오늘</option>
        <option value="week">주간</option>
      </St.WeatherSelect>
      <St.WeatherInput
        placeholder="날씨를 입력해주세요(영어로 도시 이름!)"
        onChange={handleChange}
      />
      <St.WeatherSearch onClick={handleClick}>날씨 검색</St.WeatherSearch>
    </St.FormWapper>
  );
};

export default memo(SearchCity);
