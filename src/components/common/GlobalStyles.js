import { createGlobalStyle } from "styled-components";

import fonts from "../../assets/fonts";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: "Blokk";
    font-display: auto;
    src: url(${fonts.BLOKKNeueRegularWOFF2}) format("woff2"),
         url(${fonts.BLOKKNeueRegularWOFF}) format("woff"),
         url(${fonts.BLOKKNeueRegularTTF}) format("ttf"),
         url(${fonts.BLOKKNeueRegularOTF}) format("otf"),
         url(${fonts.BLOKKNeueRegularEOT});
}
`;

export default GlobalStyles;
