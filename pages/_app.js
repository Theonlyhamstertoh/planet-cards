import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    /* background: #000000; */
    padding: 0;
    margin: 0;
    font-family: "Open sans", sans-serif;

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
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
