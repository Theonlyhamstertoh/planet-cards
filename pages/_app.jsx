import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { analytics } from "../lib/firebase";
import { useEffect } from "react";
const GlobalStyles = createGlobalStyle`
  body {
    background: #000000;

    padding: 0;
    margin: 0;
    
    font-family: "Open sans", sans-serif;

  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .rotate {
    animation: rotate 20s linear infinite;
  }

  body::-webkit-scrollbar {
  width: 5px;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background: linear-gradient(269.18deg, #ff42c9d4 5.4%, #ff42c9cc 5.41%, #7b00ffd6 97.42%);
  border-radius: 30px;
}
.defaultImg {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}
  progress {
  border-radius: 30px; 
  width: 80%;
  height: 32px;
  margin-top: 10px;

  }
progress::-webkit-progress-bar {
  background: #1d1a1d;
  border-radius: 30px;

}
progress::-webkit-progress-value {
  background: linear-gradient(92.42deg, #EEB0B0 -42.17%, #FF42CA -38.06%, #7A00FF 115.42%);
  border-radius: 30px;
  transition: width 0.3s ease-in;
}



`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);
  return (
    <>
      <Head>
        <title>Planet Cards</title>
        <link rel="shortcut icon" href="/images/icons/favicon.svg" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
