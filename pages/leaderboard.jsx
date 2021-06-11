import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { RainbowTitleFont, FlexRow, FlexSpaceBetween } from "../components/ReusableStyles";
import Link from "next/link"
import { initializeFireStore } from "../components/customHooks/useFirebase";
import { ColumnTitle, Player, Creator } from "../components/Player";
export default function Leaderboard() {
  const { leaderboardData, sortBottom, sortTop } = initializeFireStore();

  return (
    <LBContainer>
      <LeaderBoardTitle />
      <FlexRow>
        <LBSortButton onClick={sortTop}>Top</LBSortButton>
        <LBSortButton onClick={sortBottom}>Low</LBSortButton>
      </FlexRow>
      <ol className="LBList">
        <ColumnTitle />
        {leaderboardData.map(({ id, playername, score, creator}) => {
          
          if (creator === true) {
            return <Creator key={id} name={playername} score={score} />;
          } else {
            return <Player key={id} name={playername} score={score} />;
          }
        })}
      </ol>
    </LBContainer>
  );
}

const LeaderBoardTitle = () => {
  return (
    <FlexSpaceBetween>
      <LBTitle>LEADERBOARD</LBTitle>
      <Link href="/">
        <a>
          <FlexRow>
            <LBHeading htmlFor="back">Back</LBHeading>
            <input type="image" id="back" className="backButton" src="/images/icons/backButton.svg" />
          </FlexRow>
        </a>
      </Link>
     
    </FlexSpaceBetween>
  );
};

const LBContainer = styled.div`
  background: rgba(51, 10, 52, 0.73);
  min-height: 100vh;
  padding: 30px 300px;
  transition: padding 0.5s;
  @media (max-width: 1300px) {
    padding: 30px 100px;
  }
  @media (max-width: 900px) {
    padding: 30px 50px;
  }
  @media (max-width: 545px) {
    padding: 0px 20px;
    padding-bottom: 20px;
  }
  .backButton {
    height: 30px;
    margin-top: 5px;
    width: 30px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }

    @media (max-width: 600px) {
      width: 20px;
      margin: 3px 0 0 0;
    }
  }

  .LBList {
    counter-reset: my-awesome-counter;
    padding: 0;
  }

  .marginRight {
    margin-right: 10px;
  }
`;

const LBTitle = styled(RainbowTitleFont)`
  background: linear-gradient(268.84deg, #ff42ca 2.71%, #ff42ca 40.72%, #8716ff 108.65%);
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 50px;
  transition: font-size 0.3s;
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const LBSortButton = styled.button`
  width: 80.08px;
  height: 37.54px;
  color: #ae71bd;
  font-size: 18px;
  background: #351038;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  margin-top: 20px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }
  @media (max-width: 800px) {
    font-size: 14px;
    margin: 0;
    width: 70px;
    height: 30px;
  }
`;

const LBHeading = styled.label`
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 0.045em;
  color: #ae71bd;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    transform: translateX(-10px);
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
