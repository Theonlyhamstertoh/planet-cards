import styled from "styled-components";

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
  letter-spacing: 0.03em;
`;

export const RainbowRegFont = styled(StyledRegFont)`
  background: linear-gradient(268.84deg, #ff42ca 5.71%, #ff42ca 5.72%, #9839ff 122.65%);
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
  width: 652px;
  height: 165px;
  font-size: 64px;
  line-height: 79px;
  letter-spacing: 0.035em;

  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const LevelButton = styled.div`
  padding: 0 25px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 10, 52, 0.73);
  border-radius: 36px;
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

export const Score = styled.div`
  background: linear-gradient(
    269.56deg,
    rgba(25, 117, 224, 0.73) 2.23%,
    rgba(122, 0, 255, 0.73) 43.46%,
    rgba(253, 14, 85, 0.73) 102.62%
  );
  border-radius: 36px;
  /* width: 142.51px; 
  */
  padding: 0 30px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
