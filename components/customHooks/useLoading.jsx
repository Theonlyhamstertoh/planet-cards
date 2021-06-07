import { useState, useEffect } from "react";

export default function useLoading() {
  const [progressValue, setProgressValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  useEffect(() => {
    if (progressValue === maxValue) {
      setTimeout(() => setGameMode("game"), 450);
    }
  }, [progressValue]);

  function incrementProgress(value) {
    setProgressValue((prev) => prev + value);
  }

  function resetProgress() {
    setProgressValue(0);
  }

  function showPlanet() {
    if (lvl.num === 1 || lvl.num > 13) {
      return "/images/cards/mars.jpg";
    } else if (lvl.num < 12) {
      return `/images/cards/${PLANETS[lvl.num]}`;
    }
  }

  return {
    setMaxValue,
    showPlanet,
    resetProgress,
    incrementProgress,
    maxValue,
    progressValue,
  };
}
