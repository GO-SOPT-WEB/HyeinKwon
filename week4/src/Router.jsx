import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import WeatherCard from "./components/WeatherCard";
import DayWeatherCard from "./components/DayWeatherCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />}>
          <Route path="week/:area" element={<WeatherCard />} />
          <Route path="day/:area" element={<DayWeatherCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
