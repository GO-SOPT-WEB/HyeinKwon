import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import DetailWeather from "./pages/DetailWeather";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/detail" element={<DetailWeather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
