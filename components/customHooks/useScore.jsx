import { useState } from "react";

export const useScore = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  const updateScore = (points) => {
    setScore((prevScore) => {
      const newScore = prevScore + points;
      if (bestScore < newScore) {
        setBestScore(newScore);
      }

      return newScore;
    });
  };

  return { resetScore, updateScore, score, bestScore };
};
