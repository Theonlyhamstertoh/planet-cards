import styled from "styled-components";
import { RainbowTitleFont, Level, HighScore, StyledRegFont } from "../components/ReusableStyles";

export default function GameHeading({ lvl, score, bestScore, gameMode }) {
  return (
    <SpaceBetween style={gameMode === "nextLevel" ? { display: "none" } : {}}>
      <RainbowTitleFont>Planet Cards</RainbowTitleFont>
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
  padding: 5px 30px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FlexColRight = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  /* justify-content: flex-; */
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 800px) {
    align-items: center;

    ${HighScore} {
      padding: 0;
    }
  }
`;
