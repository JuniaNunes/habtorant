import styled from "styled-components";
import { AppBar, Fab, IconButton, Toolbar } from "@material-ui/core";
import { COLORS } from "../../style";

export const MenuContainer = styled(AppBar)`
  top: auto !important;
  bottom: 0 !important;
  background-color: ${COLORS.foreground} !important;

  @media (min-width: 1024px) {
    top: 0 !important;
    bottom: auto !important;
  }
`;

export const MenuHomeButton = styled(Fab)`
  position: relative !important;
  z-index: 1;
  top: -30px;
  left: 0;
  margin: 0 0px !important;
  background-color: ${COLORS.highlight} !important;

  @media (min-width: 1024px) {
    top: 20px;
    &:hover {
      transition: transform 0.5s ease-in-out;
      transform: rotate(360deg);
    }
  }
`;

export const MenuIconsWrap = styled(Toolbar)`
  justify-content: space-between;

  button:first-child {
    display: none !important;
  }
`;

export const MenuIcon = styled(IconButton)`
  margin: 0 !important;
  color: ${COLORS.text} !important;
`;

export const MenuHomeLogo = styled.img`
  width: 32px;
`;
