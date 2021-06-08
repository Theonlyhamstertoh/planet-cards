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
    score,
    cardClickHandler,
    bestScore,
    lvl,
    gameMode,
    progressValue,
    incrementProgress,
    maxValue,
    clickedCards,
  } = useGameLogic();

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
          clickedCards={clickedCards}
          onClick={cardClickHandler}
          maxCards={maxValue}
          incrementProgress={incrementProgress}
        />
      )}
    </React.Fragment>
  );
}
