import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { TypographyStyle } from "react-typography";

import { GlobalStyles } from "./components/common";

import Navbar from "../Navbar";
import Houses from "../Houses";

import theme from "./utils/theme";

// typography config
import typography from "./utils/typography";

// fonts
import "typeface-inter";
import "typeface-roboto-slab";

function App() {
  return (
    <>
      <Helmet>
        <TypographyStyle typography={typography} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <main>
            <Navbar />
            <Houses />
          </main>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
