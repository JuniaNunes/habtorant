import styled from "styled-components";
import { Card } from "@material-ui/core";
import { COLORS, FONTS } from "../../style";

export const CardSearchContainer = styled(Card)`
  background-color: ${COLORS.highlight} !important;
  width: 300px;
  height: 290px;
  margin: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${COLORS.textHighlight} !important;
  cursor: pointer;

  h1 {
    font-family: ${FONTS.normal};
    margin: 0;
    font-size: 25px;
    padding: 5px;
  }
  p {
    margin: 0;
    font-size: 1.1rem;
  }
  p:nth-of-type(1) {
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
