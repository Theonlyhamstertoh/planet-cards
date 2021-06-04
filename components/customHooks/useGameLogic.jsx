import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./uselvl";
import { useScore } from "./useScore";
import { useClickedCards } from "./useClickedCards";
import Router from "next/router";

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
  "tomato",
  "#abcdef",
  "#abcd3f",
  "#3382b4",
  "#28ba48",
  "#9d89fe",
  "#c6c08b",
  "#7fe33b",
  "#85a0a0",
];

export const useGameLogic = () => {
  const { shuffleCards, resetCards, cards, setNewCards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl, isInitialLvl } = useLvl();
  const { setClickedCards, clickedCards, resetClickedCards } = useClickedCards();
  const [gameMode, setGameMode] = useState("start");

  useEffect(() => {
    if (cards !== null && clickedCards.length === cards.length) {
      nextLvl();
      resetClickedCards();
    } else if (clickedCards.length !== 0) {
      setNewCards(shuffleCards(cards));
    }

    if (cards !== null) {
      console.log(cards.filter((card) => !clickedCards.includes(card)));
    }
  }, [clickedCards]);

  useEffect(() => {
    setNewCards(selectRandomCards(lvl.cardsCount));
    // setGameMode("nextLevel");
  }, [isInitialLvl, lvl]);

  function cardClickHandler(e) {
    // need to change this in future since now it's based on ID
    const cardId = e.target.dataset.id;
    if (clickedCards.includes(cardId)) {
      resetLvl();
      resetScore();
      resetCards();
      resetClickedCards();
    } else {
      updateScore(1);
      setClickedCards((state) => [...state, cardId]);
    }
  }

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
