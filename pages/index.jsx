import React, { useState, useEffect } from "react";
import {
  RainbowButton,
  FlexColCenter,
  RainbowHeadingFont,
  RainbowTitleFont,
} from "../components/ReusableStyles";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import Link from "next/link";

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

export default function StartScreen() {
  return (
    <FlexColCenter>
      <RainbowTitleFont>Planet Cards</RainbowTitleFont>
      <Link href="/game">
        <a>
          <RainbowButton text="Start Game" />
        </a>
      </Link>
      <LoadingImg
        className="rotate"
        src={"/images/cards/" + PLANETS[Math.floor(Math.random() * PLANETS.length)]}
        width="400px"
        objectFit="contain"
        height="400px"
      />
    </FlexColCenter>
  );
}
const LoadingImg = styled.img`
  object-fit: cover;
  z-index: -1;
  width: 300px;
  user-select: none;
  height: 300px;
  margin-top: 20px;
  border-radius: 24px;

  @media (max-width: 400px) {
    width: 200px;
    height: 200px;
  }
`;
