import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { StyledRegFont } from "../components/ReusableStyles";
import React, { useEffect } from "react";

export default function GameBoard({ cards, onClick, incrementProgress, clickedCards, gameMode }) {
  if (cards === null) {
    return;
  }

  const loaded = (img) => {
    incrementProgress(10);
  };

  return (
    <Container style={gameMode === "nextLevel" ? { display: "none" } : {}}>
      {cards.map((image) => {
        const name = image.src.replace(/\.(jpe?g|gif|png|webp)$/i, "");
        return (
          <Card
            key={image.id}
            dataName={image.src}
            image={image.src}
            onClick={onClick}
            onLoad={loaded}
            clickedCards={clickedCards}
          >
            {name}
          </Card>
        );
      })}
    </Container>
  );
}

function Card({ onClick, children, image, dataName, onLoad, clickedCards }) {
  return (
    <IndividualCard
      style={clickedCards.includes(image) ? { background: "green" } : {}}
      onClick={onClick}
      data-name={dataName}
    >
      <Frame>
        <DefaultImg onLoad={onLoad} src={"/images/cards/" + image} alt={"picture of " + children} />
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
  user-select: none;
`;

const fadeIn = keyframes`
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
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

  animation: ${fadeIn} 0.3s ease-in-out;
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
