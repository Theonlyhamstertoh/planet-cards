import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./uselvl";
import { useScore } from "./useScore";

export const useGameLogic = () => {
  const { shuffleCards, resetCards, setClickedCards, cards, clickedCards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl } = useLvl();
  const [gameMode, setGameMode] = useState("startGame");

  function cardClickHandler(e) {
    const cardId = e.target.dataset.id;
    checkForClickedCards(cardId);

    // if (clickedCards.includes(cardId)) {

    //   setClickedCards([]);
    //   setScore(0);
    //   setGameMode("over");
    // } else {
    //   setClickedCards((state) => [...state, cardId]);
    //   setScore((state) => state + 1);
    // }
  }

  const checkForClickedCards = (cardId) => {
    // need to change this in future since now it's based on ID
    if (clickedCards.includes(cardId)) {
      resetLvl();
      resetScore();
      resetCards();
    } else {
      updateScore(1);
      setClickedCards((state) => [...state, cardId]);
    }
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
