import { useState, useEffect } from "react";

export default function useLoading() {
  const [progressValue, setProgressValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  useEffect(() => {
    // console.log(progressValue, maxValue);
  });

  function incrementProgress(value) {
    setProgressValue((prev) => prev + value);
  }

  function resetProgress() {
    setProgressValue(0);
  }

  return {
    setMaxValue,
    resetProgress,
    incrementProgress,
    maxValue,
    progressValue,
  };
}
