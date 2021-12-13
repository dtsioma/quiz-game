import React from "react";
import { Routes, Route } from "react-router-dom";
import { Countdown } from "../../pages/countdown/Countdown";
import { HighScores } from "../../pages/highScores/HighScores";
import { Home } from "../../pages/home/Home";
import { HowToPlay } from "../../pages/howToPlay/HowToPlay";
import { Quiz } from "../../pages/quiz/Quiz";
import { Results } from "../../pages/results/Results";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="/how-to-play" element={<HowToPlay />} />
      <Route path="/high-scores" element={<HighScores />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
