import { useState, useEffect } from "react";

const INITIAL_CARDS = [
  "red",
  "orange",
  "blue",
  "yellow",
  "black",
  "green",
  "cyan",
  "pink",
  "purple",
  "grey",
  "brown",
];

export const useCards = () => {
  const [cards, setNewCards] = useState(["red, orange, yellow, blue"]);

  const shuffleCards = () => {
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
