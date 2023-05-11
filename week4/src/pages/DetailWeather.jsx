import React from "react";
import WeatherCard from "../components/WeatherCard";
import SearchCity from "../components/SearchCity";
import PageLayout from "../PageLayout";
import { Outlet } from "react-router-dom";

const DetailWeather = () => {
  return (
    <>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};

export default DetailWeather;
