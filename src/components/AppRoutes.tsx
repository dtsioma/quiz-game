import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Countdown } from "../pages/Countdown";
import { Home } from "../pages/Home";
import { Quiz } from "../pages/Quiz";
import { Results } from "../pages/Results";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};
