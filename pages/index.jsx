import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Nothing to see here</h1>
    </div>
  );
}

// import styled from "styled-components";
// export default function Home() {
//   return (
//     <HomePage>
//       <BluePlanet
//         src="/images/homepage/bluePlanet.jpg"
//         bottom="-20%"
//         left="-5%"
//         width="951px"
//         height="805px"
//         rotate="-15deg"
//       />

//       <OrangePlanet
//         src="/images/homepage/orange-home-planet.jpg"
//         top="-54%"
//         right="-4%"
//         width="1100px"
//         height="900px"
//         rotate="45deg"
//       />

//       <Rocket src="/images/homepage/spaceship.svg" left="300px" width="546px" height="304px" />
//       <Astronaut
//         src="/images/homepage/astros.svg"
//         width="85px"
//         height="96px"
//         left="50%"
//         top="60%"
//       />
//       <HomeTitle>
//         <HomeHeading>Planet Cards</HomeHeading>
//         <a target="_blank" href="https://github.com/Theonlyhamstertoh/planet-cards">
//           <Extrabold>THEONLYHAMSTERTOH</Extrabold>
//           <Image src="/images/icons/github.svg" width="20px" height="20px" />
//         </a>
//       </HomeTitle>
//       <Link href="/game">
//         <a>
//           <img
//             className="blue-button"
//             src="/images/icons/bluebutton.svg"
//             width="40px"
//             height="40px"
//           />
//         </a>
//       </Link>
//     </HomePage>
//   );
// }

// const HomePage = styled.div`
//   overflow: hidden;
//   position: relative;
//   width: 100vw;
//   height: 100vh;

//   .blue-button {
//     position: absolute;
//     width: 40px;
//     height: 40px;
//     left: 50%;
//     top: 85%;
//   }
//   @media (min-width: 2100px) {
//     width: 1920px;
//     height: 1052px;
//     margin: 0 auto;
//   }

//   @media (max-width: 900px) {
//     overflow-y: scroll;
//     min-height: 100vh;
//     height: auto;

//     .blue-button {
//       width: 25px;
//       transform: translate(-50%, 650px);

//       /* transform: translateY(580px); */
//     }
//   }

//   @media (max-width: 630px) {
//     /* overflow-y: initial; */
//     .blue-button {
//       transform: translate(0px, 870px);
//     }
//   }
// `;

// const HomeTitle = styled.div`
//   text-align: right;
//   position: absolute;
//   bottom: 25px;
//   right: 25px;

//   a {
//     margin-right: 20px;
//   }

//   @media (max-width: 900px) {
//     transform: translateY(580px);
//     a {
//       margin-right: 10px;
//     }
//     img {
//       width: 10px;
//     }
//   }

//   @media (max-width: 630px) {
//     transform: translate(0px, 750px);
//   }
// `;

// const HomeHeading = styled.h1`
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-image: radial-gradient(
//     42.6% 66.98% at 66.76% 32.14%,
//     #141414 0%,
//     #d6853a 0.01%,
//     #0d5166 100%
//   );
//   user-select: none;
//   line-height: 196px;
//   font-weight: 800;
//   margin: 10px 0;
//   font-size: 10rem;
//   line-height: 156px;
//   word-spacing: 100vw;
//   /* position: absolute; */
//   opacity: 0.7;
//   @media (max-width: 1400px) {
//     font-size: 7.5rem;
//     line-height: 130px;
//   }
//   @media (max-width: 1100px) {
//     font-size: 5rem;
//     margin: 0;
//     line-height: 90px;
//   }
// `;

// const Extrabold = styled.span`
//   font-weight: 700;
//   font-size: 20px;
//   margin-right: 20px;
//   color: #186077;

//   @media (max-width: 1100px) {
//     font-size: 15px;
//     margin-right: 5px;
//   }
//   @media (max-width: 900px) {
//     font-size: 10px;
//     margin-right: 5px;
//   }
// `;

// const Position = styled.img`
//   position: absolute;
//   z-index: -1;
//   width: ${(props) => props.width || ""};
//   height: ${(props) => props.height || ""};
//   top: ${(props) => props.top || ""};
//   left: ${(props) => props.left || ""};
//   bottom: ${(props) => props.bottom || ""};
//   right: ${(props) => props.right || ""};
//   transform: rotate(${(props) => props.rotate || "0px"});
// `;

// const BluePlanet = styled(Position)`
//   @media (min-width: 320px) {
//     width: 651px;
//     height: 605px;
//     transform: translate(-250px, 440px);
//   }
//   @media (min-width: 380px) and (max-width: 600px) {
//     width: 651px;
//     height: 605px;
//     transform: translate(-200px, 200px);
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     /* width: 531px; */
//     /* height: 585px; */
//     left: -10%;
//     transform: translateY(580px);
//   }
//   @media (min-width: 900px) and (max-width: 1299px) {
//     width: 551px;
//     transform: translateY(0px) scale(1);
//     height: 505px;
//   }
//   @media (min-width: 1300px) {
//     width: 831px;
//     transform: translate(0, 200px);
//     height: 785px;
//   }
//   @media (min-width: 1620px) {
//     width: 1000px;
//     height: 900px;
//   }
// `;

// const OrangePlanet = styled(Position)`
//   @media (min-width: 320px) and (max-width: 899px) {
//     width: 600px;
//     height: 600px;
//     transform: translate(250px, 180px) rotate(45deg);
//   }

//   @media (max-width: 900px) {
//     /* width: 651px; */
//     right: -20%;
//     top: -40%;
//     width: 800px;
//   }
//   @media (min-width: 900px) {
//     width: 700px;
//     height: 600px;
//   }
//   @media (min-width: 1300px) {
//     width: 970px;
//     height: 880px;
//   }
//   @media (min-width: 1620px) {
//     width: 1200px;
//     height: 1000px;
//   }
// `;

// const Astronaut = styled(Position)`
//   @media (max-width: 900px) {
//     width: 100px;
//     top: 0;
//     transform: translate(130px, 550px);
//   }

//   @media (max-width: 600px) {
//     transform: translate(00px, 450px);
//   }
// `;
// const Rocket = styled(Position)`
//   @media (min-width: 1920px) {
//     left: 500px;
//   }
//   @media (min-width: 900px) {
//     left: 300px;
//     width: 100px;
//     height: 300px;
//   }
//   @media (max-width: 900px) {
//     width: 100px;
//     transform: translate(-30px, 200px);
//   }

//   @media (max-width: 420px) {
//     transform: translate(-250px, 320px);
//   }
// `;
