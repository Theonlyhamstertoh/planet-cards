import React from "react";
import { RainbowButton, FlexColCenter, RainbowTitleFont } from "../components/ReusableStyles";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { RainbowRegFont } from "../components/ReusableStyles";
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
        src={"/images/cards/" + PLANETS[Math.floor(Math.random() * PLANETS.length)]}
        width="400px"
        objectFit="contain"
        height="400px"
      />
      <a style={{ zIndex: "10" }} href="https://github.com/Theonlyhamstertoh" target="_blank">
        <RainbowRegFont style={{ marginTop: "30px" }}>Created by theonlyhamster</RainbowRegFont>
      </a>
    </FlexColCenter>
  );
}
const LoadingImg = styled.img`
  object-fit: cover;
  z-index: 1;
  width: 300px;
  user-select: none;
  height: 300px;
  margin-top: 20px;
  border-radius: 24px;
  transition: 0.3s all;
  animation: rotate 20s linear infinite;
  @media (max-width: 400px) {
    width: 200px;
    height: 200px;
  }
`;
