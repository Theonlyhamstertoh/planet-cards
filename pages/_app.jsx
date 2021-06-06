import { createGlobalStyle } from "styled-components";

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
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
