import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingScreen from "../components/Loading";
import CardContainer, { FetchPlanets } from "../components/Card";
import useGameLogic from "../components/customHooks/useGameLogic";
import jsonData from "../planets.json";
import path from "path";
import fs from "fs";
import { RainbowTitleFont, Level, HighScore, StyledRegFont } from "../components/ReusableStyles";
import Image from "next/image";
export default function Game({ data: { planets } }) {
  // console.log(planets);

  const { cards, setNewCards, score, cardClickHandler, bestScore, lvl, gameMode, setGameMode } =
    useGameLogic();
  // console.log("GAME RUNNING");

  useEffect(() => {
    // setNewCards(selectRandomCards(planets));
  }, []);

  return (
    <React.Fragment>
      {/* <FetchPlanets /> */}
      {gameMode === "nextLevel" ? (
        <LoadingScreen cards={cards} lvl={lvl} setGameMode={setGameMode} />
      ) : (
        <>
          <GameHeading score={score} lvl={lvl} bestScore={bestScore} />
          <CardContainer cards={cards} onClick={cardClickHandler} />
        </>
      )}
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const planetsDirectory = path.join(process.cwd(), "planets.json");

  const fileContents = fs.readFileSync(planetsDirectory, "utf8");
  const data = JSON.parse(fileContents);
  return {
    props: {
      data,
    },
  };
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
