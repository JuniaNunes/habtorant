import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../style";
import Tungsten from "../../fonts/Tungsten-Bold.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Tungsten;
    src: url(${Tungsten});
  }

     body {
    background-color: ${COLORS.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
