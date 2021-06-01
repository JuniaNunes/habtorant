import styled from "styled-components";
import { COLORS, FONTS } from "../../style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Card } from "@material-ui/core";

export const FormEditContainer = styled.form``;

export const FormEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
`;

export const FormEditTitle = styled.h1`
  font-family: ${FONTS.normal} !important;
  font-size: 28px !important;
  letter-spacing: 0px !important;
  margin: 5px 0 !important;
`;

export const FormEditButton = styled.button`
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

export const FormEditTextWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const FormEditBackButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 !important;
  position: relative;
  left: -125px;
  top: 26px;
  cursor: pointer;
`;

export const FormEditBackButtonIcon = styled(ArrowBackIcon)`
  color: ${COLORS.highlight};
  max-width: 30px;
  height: 30px;
  font-size: 2rem !important;
`;

export const FormModalConfirmDelete = styled(Card)`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: auto;
  background-color: blue;
  min-width: 100%;
  height: 250px;
  z-index: 1;
  background-color: ${COLORS.background};
  h1 {
    font-family: ${FONTS.normal};
  }

  button {
    background-color: ${COLORS.green};
    outline: none;
    border: 0;
    margin: 20px;
    width: 100px;
    padding: 20px 0;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  button:last-of-type {
    background-color: ${COLORS.highlight};
  }
`;

export const FormBackgroundModal = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: ${COLORS.dark};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;
