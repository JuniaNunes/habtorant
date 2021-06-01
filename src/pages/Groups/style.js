import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import { Button } from "@material-ui/core";

export const GroupsTitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px 50px 0 50px;
  }
`;

export const GroupsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    padding: 20px 50px 50px 50px;
  }
`;

export const GroupsTitle = styled.h1`
  font-family: ${FONTS.normal};
  margin: 20px;
`;

export const GroupsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;
`;
