import React from "react";
import { useParams } from "react-router-dom";
import { St } from "./CardStyle";
import { useAxios } from "../lib/useAxios";
import Skeleton from "./Skeleton";

//'오늘' 부분 카드 렌더링
const DayWeatherCard = () => {
  const { area } = useParams();

  const { weather, isLoading, imgSrc } = useAxios(area);

  return (
    <>
      {isLoading ? (
        <St.CardWrapper>
          <Skeleton />
        </St.CardWrapper>
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
