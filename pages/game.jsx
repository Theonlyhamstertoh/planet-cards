import React from "react";
import styled from "styled-components";
import LoadingScreen from "../components/Loading";
import CardContainer from "../components/Card";
import useGameLogic from "../components/customHooks/useGameLogic";

import { RainbowTitleFont, Level, HighScore, StyledRegFont } from "../components/ReusableStyles";

export default function Game() {
  const { cards, score, cardClickHandler, bestScore, lvl, gameMode, setGameMode } = useGameLogic();
  return (
    <React.Fragment>
      {gameMode === "nextLevel" ? (
        <LoadingScreen lvl={lvl} setGameMode={setGameMode} />
      ) : (
        <>
          <GameHeading score={score} lvl={lvl} bestScore={bestScore} />
          <CardContainer cards={cards} onClick={cardClickHandler} />
        </>
      )}
    </React.Fragment>
  );
}

function GameHeading({ lvl, score, bestScore }) {
  return (
    <SpaceBetween>
      <RainbowTitleFont>Don’t click the same planet twice</RainbowTitleFont>
      <FlexColRight>
        <Level num={lvl.num} />
        <Score>
          <StyledRegFont>Score: {score}</StyledRegFont>
        </Score>
        <HighScore>Highest: {bestScore}</HighScore>
      </FlexColRight>
    </SpaceBetween>
  );
}

const Score = styled.div`
  background: linear-gradient(
    269.56deg,
    rgba(25, 117, 224, 0.73) 2.23%,
    rgba(122, 0, 255, 0.73) 43.46%,
    rgba(253, 14, 85, 0.73) 102.62%
  );
  border-radius: 36px;
  /* width: 142.51px; 
  */
  padding: 0 30px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
`;

const FlexColRight = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-; */
  align-items: flex-end;
  gap: 10px;
`;
