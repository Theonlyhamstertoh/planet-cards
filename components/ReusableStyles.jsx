import styled from "styled-components";

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
  letter-spacing: 0.03em;
`;

export const RainbowRegFont = styled(StyledRegFont)`
  background: linear-gradient(268.84deg, #ff42ca 5.71%, #ff42ca 5.72%, #9839ff 122.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const RainbowHeadingFont = styled(RainbowRegFont)`
  font-size: 33px;
  margin-bottom: 5px;
`;
