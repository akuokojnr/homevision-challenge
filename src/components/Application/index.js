import React from "react";
import { ThemeProvider } from "styled-components";

import Navbar from "../Navbar";
import Houses from "../Houses";

import theme from "../../utils/theme";

// typography config
import "../../utils/typography";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <Navbar />
          <Houses />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
