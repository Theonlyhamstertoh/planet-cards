import React, { useState, useEffect } from "react";
import { RainbowButton, FlexColCenter } from "../components/ReusableStyles";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";

export default function StartScreen() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked === true) {
      Router.push("/game");
    }
  }, [isButtonClicked]);

  return (
    <FlexColCenter>
      <RainbowButton onClick={() => setButtonClicked(true)} text="Start Game" />
      <Image src="/images/cards/mars.jpg" width="300px" objectFit="contain" height="300px" />
    </FlexColCenter>
  );
}
