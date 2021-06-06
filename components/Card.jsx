import Image from "next/image";
import styled from "styled-components";
import { StyledRegFont } from "../components/ReusableStyles";
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import image from "next/image";

const PLANETS = [
  "mars.jpg",
  "Venus.jpg",
  "mercury.jpg",
  "moon.jpg",
  "sun.jpg",
  "earth.jpg",
  "saturn.jpg",
  "pluto.webp",
  "Jupiter.jpg",
  "EPIC 220674823 b.jpg",
  "uranus.jpg",
  "neptune.jpg",
];

export default function GameBoard({ cards, onClick, gameMode }) {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);
  if (cards === null) return;
  return (
    <Container>
      {cards.map((image) => {
        const name = image.replace(/\.(jpe?g|gif|png|webp)$/i, "");
        return (
          <Card key={image} dataName={image} image={image} onClick={onClick}>
            {name}
          </Card>
        );
      })}
    </Container>
  );
}

function Card({ onClick, children, image, dataName }) {
  return (
    <IndividualCard onClick={onClick} data-name={dataName}>
      <Frame>
        <StyledImage src={"/images/cards/" + image} quality="100" layout="fill" objectFit="cover" />
      </Frame>
      <StyledRegFont>{children}</StyledRegFont>
    </IndividualCard>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
  gap: 20px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
`;

const DefaultImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

const IndividualCard = styled.div`
  width: 230.71px;
  height: 267.05px;
  text-align: center;
  background: linear-gradient(
    94.91deg,
    rgba(122, 0, 255, 0.45) 0.83%,
    rgba(253, 14, 85, 0.53) 111.35%
  );
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 29px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    transform: scale(1.07);
  }
`;

const Frame = styled.div`
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.246);
  border-radius: 28px;
  margin-bottom: 5px;
  user-select: none;
  width: 100%;
  border: rgba(255, 52, 130, 0.253) 5px solid;
  height: 85%;
`;

const StyledImage = styled(Image)`
  border-radius: 24px;
  user-select: none;
`;
