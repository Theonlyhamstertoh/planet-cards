import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import Image from "next/image";
import StartScreen from "./start";
import { useGameLogic } from "../components/customHooks/useGameLogic";
import {
  RainbowTitleFont,
  Level,
  Score,
  StyledRegFont,
  RainbowRegFont,
  HighScore,
} from "../components/ReusableStyles";
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
  user-select: none;
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

export default function Game() {
  const { cards, score, cardClickHandler, bestScore, lvl } = useGameLogic();

  return (
    <React.Fragment>
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

      <CardContainer>
        {cards !== null &&
          cards.map((color) => {
            return (
              <Card key={uniqid()} data-id={color} color={color} onClick={cardClickHandler}>
                {color}
              </Card>
            );
          })}
      </CardContainer>
    </React.Fragment>
  );
}

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
