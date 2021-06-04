import React, { useState, useEffect } from "react";
import {
  FlexColCenter,
  StyledButton,
  StyledRegFont,
  RainbowHeadingFont,
  RainbowRegFont,
} from "../components/ReusableStyles";

import Image from "next/image";
import Router from "next/router";
export default function StartScreen() {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (isButtonClicked === true) {
      setProgressValue(100);
      setTimeout(() => Router.push("/game"), 1500);
    }
  }, [isButtonClicked]);

  return (
    <FlexColCenter>
      {!isButtonClicked && (
        <StyledButton onClick={() => setButtonClicked(true)}>
          <StyledRegFont>Start Game</StyledRegFont>
        </StyledButton>
      )}
      {isButtonClicked && <Loading progressValue={progressValue} />}
      <Image
        className={isButtonClicked ? "rotate" : undefined}
        src="/images/cards/neptune.jpg"
        width="300px"
        objectFit="contain"
        height="300px"
      />
    </FlexColCenter>
  );
}

function Loading({ progressValue }) {
  return (
    <>
      <RainbowHeadingFont>Level 1</RainbowHeadingFont>
      <RainbowRegFont>LOADING...</RainbowRegFont>
      <progress value={progressValue} max="100"></progress>
    </>
  );
}
