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

const Counter = styled.button`
  width: 100px;
  outline: none;
  border: none;
  margin: 20px;
  height: 100px;
  font-size: 25px;
  background: #ffaea2;
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
  const { cards, score, cardClickHandler, bestScore, lvl } = useGameLogic();

  return (
    <React.Fragment>
      <h1>{lvl.num}</h1>
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

      <Counter>{score}</Counter>
      <Counter>{bestScore}</Counter>
    </React.Fragment>
  );
}
