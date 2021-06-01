import styled from "styled-components";
import { AppBar, Fab, IconButton, Toolbar } from "@material-ui/core";
import { COLORS } from "../../style";

export const MenuPositioning = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: fixed;
    top: -45px !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    z-index: 3 !important;
  }
`;

export const MenuContainer = styled(AppBar)`
  display: none;
  background-color: ${COLORS.foreground} !important;
  @media (min-width: 1024px) {
    display: block;
    top: 60px !important;
    bottom: auto !important;
    width: 60px !important;
    align-items: center;
    box-shadow: none !important;
    border-radius: 20px;

    position: relative;
    top: 4rem !important;
    left: -30px !important;
    overflow: hidden;

    transition: 0.8s !important;
    max-height: 105px !important;

    &:hover {
      max-height: 500px !important;
    }
  }
`;

export const MenuHomeButton = styled(Fab)`
  display: none;
  background-color: ${COLORS.highlight} !important;
  @media (min-width: 1024px) {
    display: block;
    top: 0px !important;
    bottom: auto !important;

    position: absolute !important;
    top: 5px !important;
    left: calc(50% - 29px) !important;

    /* transition: transform 0.5s ease-in-out; */
    /* transform: rotate(-360deg); */

    &:hover {
      transition: transform 0.5s ease-in-out;
      transform: rotate(360deg);
    }
  }
`;

export const MenuIconsWrap = styled(Toolbar)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    top: 0px !important;
    bottom: auto !important;
    flex-direction: column;
    width: 100%;

    padding-top: 55px;

    button:first-child {
      display: block !important;
    }
  }
`;

export const MenuIcon = styled(IconButton)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin: 0 !important;
    color: ${COLORS.text} !important;
  }
`;

export const MenuHomeLogo = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 32px;
  }
`;
