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

export default function LoadingScreen({ lvl, progressValue, max, showPlanet }) {
  function showPlanet() {
    if (lvl.num === 1 || lvl.num > 13) {
      return "/images/cards/mars.jpg";
    } else if (lvl.num < 12) {
      return `/images/cards/${PLANETS[lvl.num]}`;
    }
  }

  return (
    <FlexColCenter>
      <Loading progressValue={progressValue} max={max} lvl={lvl} />
      <DefaultImg
        className="rotate"
        // priority="true"
        src={showPlanet()}
        // width="300px"
        // objectFit="contain"
        // height="300px"
      />
    </FlexColCenter>
  );
}
const DefaultImg = styled.img`
  object-fit: cover;
  z-index: -1;
  width: 300px;
  height: 300px;
  margin-top: 20px;
  border-radius: 24px;
`;
function Loading({ progressValue, lvl, max }) {
  return (
    <>
      <RainbowHeadingFont>LEVEL {lvl.num}</RainbowHeadingFont>
      <RainbowRegFont>LOADING...</RainbowRegFont>
      <progress value={progressValue} max={max}></progress>
    </>
  );
}
