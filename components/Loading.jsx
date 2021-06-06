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

export default function LoadingScreen({ lvl, setGameMode, cards }) {
  const [progressValue, setProgressValue] = useState(0);
  const [maxValue, setMaxValue] = useState(120);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // setTimeout(() => setProgressValue(100), 0);
    setMaxValue(cards.length * 10);
    console.log(maxValue);
    FetchPlanets();
    return () => {
      // setProgressValue(0);
    };
  }, []);

  useEffect(() => {
    if (progressValue === maxValue) {
      setTimeout(() => setGameMode("game"), 300);
    }
  }, [progressValue]);

  const FetchPlanets = async () => {
    const planetPromises = cards.map((planet) => {
      const name = planet.replace(/\.(jpe?g|gif|png|webp)$/i, "");

      return new Promise((resolve) => {
        window.setTimeout(() => {
          setProgressValue((prevValue) => {
            if (prevValue === maxValue) return maxValue;
            return prevValue + 10;
          });
          resolve(true);
        }, Math.random() * 2000);
        // return (
        //   <Card key={uniqid()} dataName={planet} planet={planet} onLoad={planetLoaded}>
        //     {name}
        //   </Card>
        // );
      });
    });

    const images = await Promise.all(planetPromises);
    console.log(images);
  };

  function showPlanet() {
    if (lvl.num === 1) {
      return "/images/cards/mars.jpg";
    } else {
      return `/images/cards/${PLANETS[Math.floor(Math.random() * PLANETS.length)]}`;
    }
  }

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
