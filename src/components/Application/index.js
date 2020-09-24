import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../common";

import Navbar from "../Navbar";
import Houses from "../Houses";

import theme from "../../utils/theme";

// typography config
import "../../utils/typography";

// fonts
import "typeface-inter";
import "typeface-roboto-slab";

function App() {
  return (
    <>
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
