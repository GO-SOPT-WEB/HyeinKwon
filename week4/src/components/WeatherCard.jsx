import { useParams } from "react-router-dom";
import styled from "styled-components";
import { St } from "../styles/CardStyle";

import { WEATER_TYPE } from "../constants/WeatherType";
import Skeleton from "./Skeleton";

import { useAxios } from "../lib/useAxios";

//주간 부분 카드 나타나기
const WeatherCard = () => {
  const { area } = useParams();
  const { weather, isLoading } = useAxios("week", area);
  let weatherArr = Object.entries(weather);

  const weatherList = weatherArr.filter((_, index) => (index - 2) % 8 === 0);

  return (
    <Wrapper>
      {isLoading ? (
        <>
          {weatherList.map((data) => {
            <Skeleton key={data} />;
          })}
        </>
      ) : (
        <>
          {weatherList.map((data) => {
            const eachWeather = data[1];
            const { dt_txt, temp, feels_like, temp_min, temp_max, clouds } =
              eachWeather;
            const weatherDescription = eachWeather.weather
              ? eachWeather.weather[0].description
              : "";
            const imgSrc = WEATER_TYPE.find(
              ({ description }) => description === weatherDescription
            );
            return (
              <St.CardWrapper key={eachWeather.dt}>
                <St.CardHeader>
                  <h3>{dt_txt.slice(5, 10)}</h3>
                </St.CardHeader>
                <St.CardImg src={imgSrc.imgURL} alt={imgSrc.description} />
                {eachWeather && (
                  <>
                    <St.CardDesCription>
                      <span>온도</span>
                      <p>{temp}</p>
                    </St.CardDesCription>

                    <St.CardDesCription>
                      <span>체감 온도</span>
                      <p>{feels_like}</p>
                    </St.CardDesCription>

                    <St.CardDesCription>
                      <span>최저/최고</span>
                      <p>
                        {temp_min}/{temp_max}
                      </p>
                    </St.CardDesCription>

                    <St.CardDesCription>
                      <span>구름</span>
                      <p>{clouds.all}%</p>
                    </St.CardDesCription>
                  </>
                )}
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
