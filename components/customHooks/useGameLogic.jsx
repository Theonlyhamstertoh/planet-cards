import React, { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./useLvl";
import { useScore } from "./useScore";
import { useClickedCards } from "./useClickedCards";
import Router from "next/router";

const PLANETS = [
  "mars.jpg",
  "mercury.jpg",
  "Venus.jpg",
  "moon.jpg",
  "sun.jpg",
  "earth.jpg",
  "saturn.jpg",
  "pluto.webp",
  "Jupiter.jpg",
  "EPIC 220674823 b.jpg",
  "uranus.jpg",
  "neptune.jpg",
  "Himalaya.jpg",
  "brown dwarf.jpg",
];
const INITIAL_CARDS = [
  "51 Pegasi b.png",
  "55 Cancri e.jpg",
  "AG Carinae.jpg",
  "blackhole.webp",
  "brown dwarf.jpg",
  "Carina Nebula.jpg",
  "ceres.jpg",
  "curiosityrover.webp",
  "earth.jpg",
  "eclipse.jpg",
  "EPIC 220674823 b.jpg",
  "GJ 1132b.jpg",
  "GJ 3470b.jpg",
  "hd 189733b.jpg",
  "HD 80606 b.jpg",
  "Himalaya.jpg",
  "Horsehead Nebula.jpg",
  "HR_8799e.jpg",
  "Hubble.jpg",
  "Jupiter.jpg",
  "K2-98b.jpg",
  "Luhman 16A.jpg",
  "mars.jpg",
  "mercury.jpg",
  "Messier 106.jpg",
  "Messier 57.jpg",
  "moon.jpg",
  "neptune.jpg",
  "NGC 2841.jpg",
  "NGC 6217.jpg",
  "pluto.webp",
  "Rescient.jpg",
  "saturn.jpg",
  "sun.jpg",
  "The Bubble Nebula.jpg",
  "UGC 2885.jpg",
  "uranus.jpg",
  "Venus.jpg",
];

export default function useGameLogic() {
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
    setGameMode("nextLevel");
  }, [isInitialLvl, lvl]);

  function cardClickHandler(e) {
    // need to change this in future since now it's based on ID
    const cardId = e.currentTarget.dataset.name;
    console.log(cardId);
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
}
