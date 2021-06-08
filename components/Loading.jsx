import React from "react";
import { FlexColCenter, RainbowHeadingFont, RainbowRegFont } from "./ReusableStyles";
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

export default function LoadingScreen({ lvl, progressValue, max }) {
  function showPlanet() {
    if (lvl.num === 1 || lvl.num > 10) {
      return "/images/cards/mars.jpg";
    } else if (lvl.num < 11) {
      console.log(PLANETS[lvl.num]);
      return `/images/cards/${PLANETS[lvl.num]}`;
    }
  }

  return (
    <FlexColCenter>
      <Loading progressValue={progressValue} max={max} lvl={lvl} />
      <LoadingImg className="rotate" src={showPlanet()} />
    </FlexColCenter>
  );
}
const LoadingImg = styled.img`
  object-fit: cover;
  z-index: -1;
  width: 250px;
  user-select: none;
  height: 250px;
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
