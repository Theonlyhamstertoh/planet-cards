import Image from "next/image";
import styled from "styled-components";
import { StyledRegFont } from "../components/ReusableStyles";
import uniqid from "uniqid";

export default function CardContainer({ cards, onClick }) {
  return (
    <Container>
      {cards !== null &&
        cards.map((color) => {
          return <Card key={uniqid()} data-id={color} color={color} onClick={onClick} />;
        })}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
  gap: 20px;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

function Card({ onClick, color }) {
  return (
    <IndividualCard onClick={onClick}>
      <Frame>
        <StyledImage
          src="/images/cards/mercury.png"
          width="225px"
          height="225px"
          objectFit="cover"
        />
      </Frame>
      <StyledRegFont>The Bubble Nebula</StyledRegFont>
    </IndividualCard>
  );
}

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
  border-radius: 27px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    transform: scale(1.03);
  }
`;

const Frame = styled.div`
  padding: 8px 7px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  margin-bottom: 5px;
  background: radial-gradient(
    120.14% 120.14% at 48.29% -9.04%,
    #6048f1 24.81%,
    rgba(255, 52, 113, 0.626146) 69.79%,
    rgba(194, 194, 194, 0.26) 100%
  );
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86%;
`;

const StyledImage = styled(Image)`
  border-radius: 24px;
  user-select: none;
`;
