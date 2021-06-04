import React, { useState, useEffect } from "react";
import { FlexColCenter, RainbowHeadingFont, RainbowRegFont } from "./ReusableStyles";
import Image from "next/image";
import styled from "styled-components";

const PLANETS = [
  "mars.jpg",
  "Venus.jpg",
  "mercury.jpg",
  "moon.jpg",
  "sun.jpg",
  "earth.jpg",
  "saturn.jpg",
  "pluto.webp",
  "Jupiter.jpg",
  "EPIC 220674823 b.jpg",
  "uranus.jpg",
  "neptune.jpg",
];

export default function LoadingScreen({ lvl, setGameMode }) {
  const [progressValue, setProgressValue] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setProgressValue(100), 0);

    setTimeout(() => setGameMode("game"), 1000);

    return () => {
      // setProgressValue(0);
    };
  }, []);

  function showPlanet() {
    // if (lvl.num === 1) {
    //   return "/images/cards/mars.jpg";
    // } else {
    console.log("IMAGE RERUN");

    return `/images/cards/${PLANETS[Math.floor(Math.random() * PLANETS.length)]}`;
    // }
  }
  return (
    <FlexColCenter>
      <Loading progressValue={progressValue} lvl={lvl} />
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

function Loading({ progressValue, lvl }) {
  return (
    <>
      <RainbowHeadingFont>LEVEL {lvl.num}</RainbowHeadingFont>
      <RainbowRegFont>LOADING...</RainbowRegFont>
      <progress value={progressValue} max="100"></progress>
    </>
  );
}
