import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./uselvl";
import { useScore } from "./useScore";

export const useGameLogic = () => {
  const { shuffleCards, resetCards, setClickedCards, cards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl } = useLvl();
  const [gameMode, setGameMode] = useState("startGame");

  function cardClickHandler(e) {
    const cardId = e.target.dataset.id;
    console.log(cardId);
    setClickedCards((state) => [...state, cardId]);

    // if (clickedCards.includes(cardId)) {

    //   setClickedCards([]);
    //   setScore(0);
    //   setGameMode("over");
    // } else {
    //   setClickedCards((state) => [...state, cardId]);
    //   setScore((state) => state + 1);
    // }
  }

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
