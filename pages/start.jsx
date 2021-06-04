import React, { useState, useEffect } from "react";
import { RainbowHeadingFont, RainbowRegFont, RainbowButton } from "../components/ReusableStyles";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";

const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100vh;
  margin: 0 auto;
`;

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
        <RainbowButton onClick={() => setButtonClicked(true)} text="Start Game" />
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
