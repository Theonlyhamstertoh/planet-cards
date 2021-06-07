import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingScreen from "../components/Loading";
import GameHeading from "../components/GameHeading";
import GameBoard from "../components/Card";
import useGameLogic from "../components/customHooks/useGameLogic";
import Image from "next/image";
export default function Game() {
  const {
    cards,
    setNewCards,
    score,
    cardClickHandler,
    bestScore,
    lvl,
    gameMode,
    progressValue,
    selectRandomCards,
    incrementProgress,
    maxValue,
  } = useGameLogic();

  useEffect(() => {
    // setNewCards(selectRandomCards(34));
  }, []);

  return (
    <React.Fragment>
      {cards !== null && gameMode === "nextLevel" && (
        <LoadingScreen lvl={lvl} cards={cards} progressValue={progressValue} max={maxValue} />
      )}
      <GameHeading score={score} lvl={lvl} gameMode={gameMode} bestScore={bestScore} />
      {cards !== null && (
        <GameBoard
          gameMode={gameMode}
          cards={cards}
          onClick={cardClickHandler}
          incrementProgress={incrementProgress}
        />
      )}
    </React.Fragment>
  );
}

{
  /* {cards !== null ? (
        <LoadingScreen cards={cards} lvl={lvl} setGameMode={setGameMode} />
      ) : null} */
}
