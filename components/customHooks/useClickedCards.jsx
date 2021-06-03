import { useState } from "react";

export const useClickedCards = () => {
  const [clickedCards, setClickedCards] = useState([]);
  const resetClickedCards = () => {
    setClickedCards([]);
  };

  return { setClickedCards, clickedCards, resetClickedCards };
};
