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
    setGameMode,
    selectRandomCards,
  } = useGameLogic();

  useEffect(() => {
    // setNewCards(selectRandomCards(34));
  }, []);

  return (
    <React.Fragment>
      <GameHeading score={score} lvl={lvl} bestScore={bestScore} />
      {cards !== null && <GameBoard gameMode={gameMode} cards={cards} onClick={cardClickHandler} />}
    </React.Fragment>
  );
}

{
  /* {cards !== null ? (
        <LoadingScreen cards={cards} lvl={lvl} setGameMode={setGameMode} />
      ) : null} */
}
