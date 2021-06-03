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
  const [cards, setNewCards] = useState(INITIAL_CARDS);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setNewCards(shuffleCards(cards));
  }, [clickedCards]);

  const shuffleCards = (cards) => {
    const newCards = [...cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[random]] = [newCards[random], newCards[i]];
    }
    return newCards;
  };

  const resetCards = () => {
    setNewCards(INITIAL_CARDS);
  };

  return { shuffleCards, resetCards, setClickedCards, cards };
};
