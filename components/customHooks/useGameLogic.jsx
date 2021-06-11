import { useEffect, useState } from "react";
import { useCards } from "./useCards";
import { useLvl } from "./useLvl";
import { useScore } from "./useScore";
import { useClickedCards } from "./useClickedCards";
import useLoading from "./useLoading";
import { planets } from "../../planets";
import uniqid from "uniqid";
export default function useGameLogic() {
  const { shuffleCards, resetCards, cards, setNewCards } = useCards();
  const { resetScore, updateScore, score, bestScore } = useScore();
  const { lvl, nextLvl, resetLvl, isInitialLvl } = useLvl();
  const { setClickedCards, clickedCards, resetClickedCards } = useClickedCards();
  const { setMaxValue, resetProgress, incrementProgress, maxValue, progressValue } = useLoading();
  // const { getLeaderBoard, updatePlayerScore, addPlayerToFireStore, deletePlayerScore } =
  // useFirebase();
  const [gameMode, setGameMode] = useState("nextLevel");
  const [allPlanetCards, setAllPlanetCards] = useState(planets);

  //initialize firestore event listener to listen for live changes.
  useEffect(() => {
    if (cards !== null && clickedCards.length === cards.length) {
      nextLvl();
      setGameMode("nextLevel");
      resetClickedCards();
      roundReset();
    } else if (clickedCards.length !== 0) {
      setNewCards(shuffleCards(cards));
    }
  }, [clickedCards]);

  useEffect(() => {
    if (gameMode === "start") {
      setGameMode("nextLevel");
      resetLvl();
      resetScore();
      resetCards();
      resetClickedCards();
    }
    if (gameMode === "nextLevel") {
      roundReset();
    }
  }, [gameMode]);

  useEffect(() => {
    if (progressValue === maxValue) {
      window.setTimeout(() => setGameMode("game"), 480);
    }
  }, [progressValue]);

  function roundReset() {
    resetProgress();
    setMaxValue(lvl.cardsCount * 10);
    setAllPlanetCards((prev) => {
      return prev.map((planetObject) => {
        return { ...planetObject, id: uniqid() };
      });
    });
    setNewCards(selectRandomCards(lvl.cardsCount));
  }

  function cardClickHandler(e) {
    const cardId = e.currentTarget.dataset.name;
    if (clickedCards.includes(cardId)) {
      setGameMode("gameover");
    } else {
      updateScore(1);
      setClickedCards((state) => [...state, cardId]);
    }
  }

  const selectRandomCards = (cardCount) => {
    const shuffledCards = shuffleCards(allPlanetCards);
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
    setNewCards,
    bestScore,
    lvl,
    nextLvl,
    resetLvl,
    gameMode,
    setGameMode,
    cardClickHandler,
    selectRandomCards,
    incrementProgress,
    progressValue,
    maxValue,
    clickedCards,
  };
}
