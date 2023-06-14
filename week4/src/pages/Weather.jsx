import React from "react";
import PageLayout from "../PageLayout";
import { Outlet } from "react-router-dom";

const Weather = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default Weather;
