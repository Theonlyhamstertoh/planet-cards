import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingScreen from "../components/Loading";
import GameHeading from "../components/GameHeading";
import GameBoard from "../components/Card";
import useGameLogic from "../components/customHooks/useGameLogic";
import Link from "next/link";
import GameOver from "../components/GameOver";
import { RainbowRegFont, LevelButton } from "../components/ReusableStyles";
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
    setGameMode,
  } = useGameLogic();

  return (
    <GridLayout>
      {cards !== null && gameMode === "nextLevel" && (
        <LoadingScreen lvl={lvl} cards={cards} progressValue={progressValue} max={maxValue} />
      )}
      <GameHeading score={score} lvl={lvl} gameMode={gameMode} bestScore={bestScore} />
      {cards !== null && (
        <GameBoard
          gameMode={gameMode}
          cards={cards}
          onClick={cardClickHandler}
          maxCards={maxValue}
          incrementProgress={incrementProgress}
        />
      )}

      {gameMode === "gameover" && <GameOver setGameMode={setGameMode} score={score} lvl={lvl} />}
      {gameMode === "game" && (
        <Link href="/leaderboard">
          <a>
            <LeaderboardButton>
              <RainbowRegFont>Leaderboard</RainbowRegFont>
            </LeaderboardButton>
          </a>
        </Link>
      )}
    </GridLayout>
  );
}

const GridLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "nav" "main" "footer";
`;

const LeaderboardButton = styled(LevelButton)`
  grid-area: footer;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 800px) {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;
