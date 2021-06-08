import { useState, useEffect } from "react";

export default function useLoading() {
  const [progressValue, setProgressValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  // useEffect(() => {
  //   console.log("");
  // });

  function incrementProgress(value) {
    if (progressValue === maxValue) return;
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
