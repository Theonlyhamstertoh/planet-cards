import React from "react";
import styled, { css } from "styled-components";
import { FlexSpaceBetween } from "./ReusableStyles";

export const Player = ({ num, name, score }) => {
  return (
    <LBPlayerRow>
      <LBRegularFont>{name}</LBRegularFont>
      <LBScore>{score}</LBScore>
    </LBPlayerRow>
  );
};

export const Creator = ({ num, name, score }) => {
  return (
    <LBPlayerRow>
      <LBRegularFont
        special
        link
        as="a"
        href="https://github.com/Theonlyhamstertoh"
        target="_blank"
      >
        {name}
        <CreatorText>CREATOR</CreatorText>
      </LBRegularFont>
      <LBScore>{score}</LBScore>
    </LBPlayerRow>
  );
};

const CreatorText = styled.strong`
  color: #f538e2;
  margin-left: 5px;
  font-size: 12px;
`;

export const ColumnTitle = () => {
  return (
    <Hash>
      <FlexSpaceBetween>
        <LBColumnTitle>Players</LBColumnTitle>
        <LBColumnTitle className="marginRight">Scores</LBColumnTitle>
      </FlexSpaceBetween>
    </Hash>
  );
};

const Number = styled.div`
  min-width: 35px;
  padding: 0 10px;
  height: 35px;
  border-radius: 12px;
  font-weight: bold;
  background: #351038;
  color: #ae71bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LBScore = styled(Number)`
  color: #ae71bd;
  max-width: 90px;
  padding: 0 20px;
  justify-self: flex-end;
  margin-left: 30px;
  flex: 1;

  transition: font-size 0.3s;
  @media (max-width: 800px) {
    margin-left: 10px;
    max-width: 58px;
  }
`;

const LBRegularFont = styled.p`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.035em;
  flex: 1;
  justify-self: center;
  color: #ae71bd;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ special }) =>
    special &&
    css`
      color: #9a48a7;
    `}
  transition: font-size 0.3s;
  @media (max-width: 800px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const LBColumnTitle = styled(LBRegularFont)`
  width: auto;
  flex: 0 0 auto;
`;

const LBPlayerRow = styled.li`
  counter-increment: my-awesome-counter;
  flex-basis: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  &:before {
    content: counter(my-awesome-counter) ".";
    min-width: 2em;
    height: 35px;
    margin-right: 30px;
    border-radius: 12px;
    font-weight: bold;
    background: #351038;
    color: #ae71bd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  transition: all 0.3s;
  @media (max-width: 800px) {
    font-size: 12.5px;
    &:before {
      height: 30px;
      margin-right: 15px;
      padding: 0px 4px;
    }
  }
`;

const Hash = styled(LBPlayerRow)`
  counter-increment: none;
  &:before {
    content: "#";
    background: none;
    font-size: 20px;
    margin-right: 21px;
  }
`;
