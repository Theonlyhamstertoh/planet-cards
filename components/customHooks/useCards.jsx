import Image from "next/image";
import { useState, useEffect } from "react";

export const useCards = () => {
  const [cards, setNewCards] = useState(null);

  const shuffleCards = (cards) => {
    const newCards = [...cards];
    const swapOrders = newCards.sort(() => 0.5 - Math.random());
    for (let i = swapOrders.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [swapOrders[i], swapOrders[random]] = [swapOrders[random], swapOrders[i]];
    }

    const ThirdSwap = swapOrders.sort(() => 0.5 - Math.random());
    return ThirdSwap;
  };

  const resetCards = () => {
    setNewCards(null);
  };

  return { shuffleCards, resetCards, cards, setNewCards };
};
