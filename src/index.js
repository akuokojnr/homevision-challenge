import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/Application";
import { GlobalStyles } from "./components/common";

import theme from "./utils/theme";

// typography config
import "./utils/typography";

// fonts
import "typeface-inter";
import "typeface-roboto-slab";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
