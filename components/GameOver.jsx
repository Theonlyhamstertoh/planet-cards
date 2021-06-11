import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { addPlayerToFireStore } from "../components/customHooks/useFirebase";
import { FlexCol, LevelButton, RainbowRegFont, RainbowHeadingFont } from "./ReusableStyles";

export default function GameOver({ setGameMode, lvl, score, useFirebase }) {
  const [name, setName] = useState("");

  function addPlayer(e) {
    if (name.length <= 0) return;
    const lowercasename = name.toLocaleLowerCase();
    addPlayerToFireStore(score, lowercasename, false);
  }
  return (
    <GOContainer>
      <GOInnerContainer>
        <SquareInfo>
          <RainbowHeadingFont style={{ marginBottom: "10px" }}>YOU REACHED TO</RainbowHeadingFont>
          <img className="square" src="/images/icons/Rectangle.png" />

          <RainbowRegFont>Level: {lvl.num}</RainbowRegFont>
          <RainbowRegFont>Score: {score}</RainbowRegFont>
        </SquareInfo>
        <PolygonInfo>
          <RainbowHeadingFont>JOIN THE LEADERBOARD</RainbowHeadingFont>
          <img className="polygon" src="/images/icons/Polygon.svg" />
          <div className="nameLabel">
            <RainbowRegFont>NAME: </RainbowRegFont>
            <input
              type="text"
              id="name"
              className="nameInput"
              autoComplete="off"
              maxLength="40"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flexEnd">
            <Link href="/leaderboard">
              <a>
                <GOButton onClick={addPlayer}>{name.length <= 0 ? "INPUT NAME" : "SAVE"}</GOButton>
              </a>
            </Link>
          </div>
        </PolygonInfo>
        <FlexCol>
          <GOButton onClick={() => setGameMode("start")}>PLAY AGAIN</GOButton>
          <Link href="/">
            <a>
              <GOButton onClick={null}>RETURN TO HOME</GOButton>
            </a>
          </Link>
        </FlexCol>
      </GOInnerContainer>
    </GOContainer>
  );
}

const GOButton = ({ children, onClick }) => {
  return (
    <StyledGOButton onClick={onClick}>
      <RainbowRegFont className="smallFont">{children}</RainbowRegFont>
    </StyledGOButton>
  );
};
const GOContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 10, 52, 0.73);

  .smallFont {
    font-size: 13px;
  }

  .disabled {
    background: #7d7d7d;
    color: #3a3a3a;
  }
`;

const GOInnerContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1000;
  width: fit-content;
  flex-direction: column;
`;

const SquareInfo = styled.div`
  position: relative;
  margin-bottom: 120px;
  text-align: center;
  &:hover {
    .square {
      transform: rotate(-290deg) translate(-90px, 220px);
    }
  }
  .square {
    position: absolute;
    left: 50%;
    user-select: none;
    box-shadow: 15px 15px 5px rgba(7, 7, 7, 0.24);
    z-index: -1;
    transition: all 1s;
    top: 55%;
    transform: translate(-50%, -50%);
  }
`;
const PolygonInfo = styled.div`
  position: relative;
  margin-bottom: 60px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    .polygon {
      transform: rotate(290deg) translate(90px);
    }
  }
  .polygon {
    transition: all 1s;
    position: absolute;
    left: 55%;
    z-index: -1;
    top: 35%;
    transform: translate(-50%, -50%);
  }

  .nameInput {
    background: none;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 5px;
    width: 180px;
    height: 30px;
    color: #ff6ad5;
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.03em;
  }

  .nameLabel {
    border-bottom: 2px solid #7a00ff;
    width: fit-content;
    color: #ff6ad5;
    font-size: 18px;
    margin-top: 5px;
    color: black;
    display: flex;
    gap: 10px;
  }

  .flexEnd {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    width: 100%;
  }
`;

const StyledGOButton = styled(LevelButton)`
  padding: 15px 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }
`;
