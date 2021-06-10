import styled from "styled-components";
import {
  RainbowTitleFont,
  Level,
  HighScore,
  StyledRegFont,
  RainbowRegFont,
} from "../components/ReusableStyles";

export default function GameHeading({ lvl, score, bestScore, gameMode }) {
  return (
    <SpaceBetween style={gameMode !== "game" ? { display: "none" } : {}}>
      <CenterText>
        <RainbowTitleFont>Planet Cards</RainbowTitleFont>
        <Caption>Don't click the same planet twice!</Caption>
      </CenterText>
      <FlexColRight>
        <Level num={lvl.num} />
        <Score>
          <StyledRegFont>Score: {score}</StyledRegFont>
        </Score>
        <HighScore>Best: {bestScore}</HighScore>
      </FlexColRight>
    </SpaceBetween>
  );
}

const CenterText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

const Caption = styled(RainbowRegFont)`
  font-weight: 600;
  margin: 5px 0 20px 0;
  color: #b1b1b1;
  font-size: 14px;
  line-height: initial;
  width: max-content;
`;
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
  grid-area: nav;
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
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 800px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    ${StyledRegFont} {
      font-size: 12px;
      padding: 0;
    }

    ${Score} {
      padding: 5px 15px;
    }
  }
`;
