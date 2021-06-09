import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FlexSpaceBetween = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100vh;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  background: linear-gradient(
    269.56deg,
    rgba(122, 0, 255, 0.73) 2.23%,
    rgba(255, 66, 202, 0.73) 102.62%
  );
  border-radius: 36px;
  width: 172px;
  border: none;
  z-index: 1;
  cursor: pointer;
  height: 51px;
  margin: 20px 0;
`;

export const StyledRegFont = styled.p`
  color: #f3f3f3;
  font-weight: 700;
  font-size: 17px;
  line-height: 27px;
  user-select: none;
  letter-spacing: 0.03em;
`;

export const CardFont = styled(StyledRegFont)`
  font-size: 15px;

  @media (max-width: 1100px) {
    font-size: 12.7px;
  }
`;
export const RainbowRegFont = styled(StyledRegFont)`
  background: linear-gradient(268.84deg, #ff6ad5 5.71%, #ff42ca 5.72%, #ac5eff 122.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HighScore = styled(RainbowRegFont)`
  padding: 0 20px;
`;
export const RainbowHeadingFont = styled(RainbowRegFont)`
  font-size: 33px;
  margin-bottom: 5px;
`;
export const RainbowTitleFont = styled.h1`
  background: radial-gradient(
    76.92% 121.42% at 66.76% 32.14%,
    #ff42ca 0%,
    #d6853a 0.01%,
    #bc148d 100%,
    #7a00ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 80px;

  line-height: 70px;
  letter-spacing: 0.035em;

  @media (max-width: 800px) {
    font-size: 45px;
  }
  @media (max-width: 380px) {
    font-size: 35px;
  }
`;

// level button
export const LevelButton = styled.div`
  padding: 0 25px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(64, 12, 65);
  border-radius: 36px;
  width: fit-content;

  @media (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const Level = ({ num }) => {
  return (
    <LevelButton>
      <RainbowRegFont>Level {num}</RainbowRegFont>
    </LevelButton>
  );
};

export const RainbowButton = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledRegFont>Start Game</StyledRegFont>
    </StyledButton>
  );
};
