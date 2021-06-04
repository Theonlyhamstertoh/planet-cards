import { useState, useEffect } from "react";

export const useCards = () => {
  const [cards, setNewCards] = useState(null);

  const shuffleCards = (cards) => {
    const newCards = [...cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[random]] = [newCards[random], newCards[i]];
    }
    return newCards;
  };

  const resetCards = () => {
    setNewCards(null);
  };

  return { shuffleCards, resetCards, cards, setNewCards };
};
