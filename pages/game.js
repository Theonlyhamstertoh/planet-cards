import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import { useGameLogic } from "../components/customHooks/useGameLogic";

const CardContainer = styled.div`
  width: 100vw;
  height: 500px;
  gap: 20px;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: ${({ color }) => color};
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

// function GameController({ gameMode, setGameMode }) {
//   if (gameMode === "over") {
//     return <button onClick={() => setGameMode("startGame")}>restart Game</button>;
//   } else if (gameMode === "startGame") {
//     return <button onClick={() => setGameMode("play")}>Play Game</button>;
//   } else if (gameMode === "play") {
//     return <div>playing</div>;
//   } else {
//     return null;
//   }
// }

export default function Game() {
  const { cards, score, cardClickHandler, bestScore } = useGameLogic();
  console.log(cards);

  return (
    <React.Fragment>
      <CardContainer>
        {score < 10 &&
          cards.map((color) => {
            return (
              <Card key={uniqid()} data-id={color} color={color} onClick={cardClickHandler}>
                {color}
              </Card>
            );
          })}
      </CardContainer>

      <span>{score}</span>
      <span>{bestScore}</span>
    </React.Fragment>
  );
}
