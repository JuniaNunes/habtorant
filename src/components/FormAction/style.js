import styled from "styled-components";
import { COLORS, FONTS } from "../../style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const FormActionContainer = styled.form``;

export const FormActionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -30px;

  @media (min-width: 1024px) {
    margin-top: -65px;
  }
`;

export const FormActionTitle = styled.h1`
  font-family: ${FONTS.normal} !important;
  font-size: 28px !important;
  letter-spacing: 0px !important;
  margin: 5px 0 !important;
`;

export const FormActionButton = styled.button`
  width: 100%;
  outline: none;
  border: 0;
  height: 70px;
  background-color: ${({ isRemovable }) =>
    isRemovable ? COLORS.dark : COLORS.highlight};
  color: ${COLORS.textHighlight};
  margin: 5px 0;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FormActionTextWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const FormActionBackButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 !important;
  position: relative;
  left: -125px;
  top: 26px;
  cursor: pointer;

  @media (min-width: 1024px) {
    top: -9px;
  }
`;

export const FormActionBackButtonIcon = styled(ArrowBackIcon)`
  color: ${COLORS.highlight};
  max-width: 30px;
  height: 30px;
  font-size: 2rem !important;
`;
