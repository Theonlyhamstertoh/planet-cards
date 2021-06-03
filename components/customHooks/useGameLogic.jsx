import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./uselvl";
import { useScore } from "./useScore";
import { useClickedCards } from "./useClickedCards";

export const useGameLogic = () => {
  const { shuffleCards, resetCards, cards, setNewCards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl } = useLvl();
  const { setClickedCards, clickedCards, resetClickedCards } = useClickedCards();
  const [gameMode, setGameMode] = useState("startGame");

  useEffect(() => {
    if (clickedCards.length === 0) {
      setNewCards(selectRandomCards(lvl.cardsCount));
    } else {
      setNewCards(shuffleCards());
    }
  }, [clickedCards]);

  function cardClickHandler(e) {
    const cardId = e.target.dataset.id;
    checkForClickedCards(cardId);
  }

  const checkForClickedCards = (cardId) => {
    // need to change this in future since now it's based on ID
    if (clickedCards.includes(cardId)) {
      resetLvl();
      resetScore();
      resetCards();
      resetClickedCards();
    } else {
      updateScore(1);
      setClickedCards((state) => [...state, cardId]);
    }
  };

  const selectRandomCards = (cardCount) => {
    const shuffledCards = shuffleCards();
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
