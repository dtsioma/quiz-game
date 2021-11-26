import React from "react";
import { Routes, Route } from "react-router-dom";
import { Countdown } from "../pages/Countdown";
import { Home } from "../pages/Home";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countdown" element={<Countdown />} />
    </Routes>
  );
};
