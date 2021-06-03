import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./uselvl";
import { useScore } from "./useScore";
import { useClickedCards } from "./useClickedCards";

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

export const useGameLogic = () => {
  const { shuffleCards, resetCards, cards, setNewCards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl } = useLvl();
  const { setClickedCards, clickedCards, resetClickedCards } = useClickedCards();
  const [gameMode, setGameMode] = useState("startGame");

  useEffect(() => {
    if (clickedCards.length !== 0) {
      setNewCards(shuffleCards(cards));
    } else {
      setNewCards(selectRandomCards(lvl.cardsCount));
    }
  }, [clickedCards]);

  useEffect(() => {
    console.log("laksdj");
  }, [lvl]);

  function cardClickHandler(e) {
    const cardId = e.target.dataset.id;
    checkForClickedCards(cardId);
  }

  const checkForClickedCards = (cardId) => {
    // need to change this in future since now it's based on ID
    if (clickedCards.length === cards.length) {
      resetClickedCards();
      nextLvl();
    } else if (clickedCards.includes(cardId)) {
      resetLvl();
      resetScore();
      resetCards();
      resetClickedCards();
    } else {
      // resetLvl();
      updateScore(1);
      setClickedCards((state) => [...state, cardId]);
    }

    console.log(clickedCards, cards);
  };

  const selectRandomCards = (cardCount) => {
    const shuffledCards = shuffleCards(INITIAL_CARDS);
    return shuffledCards.splice(0, cardCount);
  };

  return {
    shuffleCards,
    resetCards,
    setClickedCards,
    resetScore,
    updateScore,
    score,
    cards,
    bestScore,
    lvl,
    nextLvl,
    resetLvl,
    gameMode,
    setGameMode,
    cardClickHandler,
  };
};
