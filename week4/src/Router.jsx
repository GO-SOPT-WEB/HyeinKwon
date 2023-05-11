import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import WeatherCard from "./components/WeatherCard";
import DayWeatherCard from "./components/DayWeatherCard";
import Error from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />}>
          <Route path="week/:area" element={<WeatherCard />} />
          <Route path="day/:area" element={<DayWeatherCard />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
