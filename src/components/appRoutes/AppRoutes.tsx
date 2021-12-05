import React from "react";
import { Routes, Route } from "react-router-dom";
import { Countdown } from "../../pages/countdown/Countdown";
import { Home } from "../../pages/home/Home";
import { Quiz } from "../../pages/quiz/Quiz";
import { Results } from "../../pages/results/Results";

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
