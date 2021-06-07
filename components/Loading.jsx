import React, { useState, useEffect, useCallback } from "react";
import { FlexColCenter, RainbowHeadingFont, RainbowRegFont } from "./ReusableStyles";
import Image from "next/image";
import styled from "styled-components";

const PLANETS = [
  "mars.jpg",
  "Venus.jpg",
  "mercury.jpg",
  "moon.jpg",
  "earth.jpg",
  "saturn.jpg",
  "pluto.webp",
  "Jupiter.jpg",
  "EPIC 220674823 b.jpg",
  "uranus.jpg",
  "neptune.jpg",
];

export default function LoadingScreen({ lvl, setGameMode, cards }) {
  return (
    <FlexColCenter>
      <Loading progressValue={progressValue} max={maxValue} lvl={lvl} />
      <Image
        className="rotate"
        priority="true"
        src={showPlanet()}
        width="300px"
        objectFit="contain"
        height="300px"
      />
    </FlexColCenter>
  );
}

function Loading({ progressValue, lvl, max }) {
  return (
    <>
      <RainbowHeadingFont>LEVEL {lvl.num}</RainbowHeadingFont>
      <RainbowRegFont>LOADING...</RainbowRegFont>
      <progress value={progressValue} max={max}></progress>
    </>
  );
}
