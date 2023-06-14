import { styled } from "styled-components";

export const St = {
  FormWapper: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2rem;

    border-radius: 2rem;

    & > h1 {
      font-size: 2.5rem;
    }
  `,

  WeatherInput: styled.input`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20rem;
    height: 3.5rem;

    padding: 2rem;
    margin: 1.3rem;

    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.light_orange};

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  `,

  WeatherSelect: styled.select`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    line-height: 2.5rem;

    border-radius: 0.5rem;
    text-align: center;

    @font-face {
      font-family: "Dovemayo_gothic";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2")
        format("woff2");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "Dovemayo_gothic";

    cursor: pointer;
  `,

  WeatherSearch: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.coral};
  `,
};
