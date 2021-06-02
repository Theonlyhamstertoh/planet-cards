import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";
export default function Home() {
  return (
    <HomePage>
      <Planets
        src="/images/homepage/bluePlanet.jpg"
        bottom="-20%"
        left="-5%"
        width="951px"
        height="805px"
        rotate="-15deg"
      />

      <Planets
        src="/images/homepage/orange-home-planet.jpg"
        top="-54%"
        right="-4%"
        width="1100px"
        height="900px"
        rotate="45deg"
      />

      <Rocket src="/images/homepage/spaceship.svg" left="300px" width={546} height={304} />
      <Position src="/images/homepage/astros.svg" width={85} height={96} left="50%" top="60%" />
      <HomeTitle>
        <HomeHeading>Planet Cards</HomeHeading>
        <GithubAccount target="_blank" href="https://github.com/Theonlyhamstertoh/planet-cards">
          <Extrabold>THEONLYHAMSTERTOH</Extrabold>
          <Image src="/images/icons/github.svg" width={20} height={20} />
        </GithubAccount>
      </HomeTitle>
      <Position center src="/images/icons/bluebutton.svg" width={40} height={40} />
    </HomePage>
  );
}

const HomePage = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;

  @media (min-width: 2100px) {
    width: 1920px;
    height: 1052px;
    margin: 0 auto;
  }
`;

const HomeTitle = styled.div`
  text-align: right;
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

const HomeHeading = styled.h1`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: radial-gradient(
    42.6% 66.98% at 66.76% 32.14%,
    #141414 0%,
    #d6853a 0.01%,
    #0d5166 100%
  );
  user-select: none;
  line-height: 196px;
  font-weight: 800;
  margin: 10px 0;
  font-size: 10rem;
  line-height: 156px;
  word-spacing: 100vw;
  /* position: absolute; */
  opacity: 0.7;
  @media (max-width: 1100px) {
    font-size: 6rem;
    line-height: 90px;
  }
`;

const GithubAccount = styled.a`
  margin-right: 20px;
`;

const Extrabold = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 20px;
  color: #186077;
`;

const Position = styled.img`
  position: absolute;
  z-index: -1;
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  bottom: ${(props) => props.bottom || ""};
  right: ${(props) => props.right || ""};
  transform: rotate(${(props) => props.rotate || "0px"});

  ${({ center }) =>
    center &&
    css`
      /* margin-left: -50px; */
      left: 50%;
      width: auto;
      height: auto;
      top: 85%;
    `}
`;

const Planets = styled(Position)`
  @media (min-width: 900px) and (max-width: 1100px) {
    width: calc(${(props) => props.width} - 400px);
    height: calc(${(props) => props.height} - 300px);
    /* height: ${({ height }) => calc(height + "20%")}; */
  }
  @media (min-width: 1101px) and (max-width: 1400px) {
    width: calc(${(props) => props.width} - 320px);
    height: calc(${(props) => props.height} - 220px);
    /* height: ${({ height }) => calc(height + "20%")}; */
  }
  @media (min-width: 1920px) {
    width: calc(${(props) => props.width} + 15%);
    height: calc(${(props) => props.height} + 15%);
    /* height: ${({ height }) => calc(height + "20%")}; */
  }
`;

const Rocket = styled(Position)`
  @media (min-width: 1920px) {
    left: 500px;
  }
  @media (max-width: 1100px) {
    left: 300px;
    width: 100px;
    height: 300px;
  }
`;
