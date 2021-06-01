import styled from "styled-components";
import { InputBase, Toolbar } from "@material-ui/core";
import { COLORS, FONTS } from "../../style";

export const SearchTitle = styled.h1`
  font-family: ${FONTS.normal};
  font-size: 2rem;
  margin-top: 7rem;

  @media (min-width: 1040px) {
    color: ${COLORS.textHighlight};
    font-size: 3rem;
    padding-top: 70px;
  }
`;

export const SearchBar = styled(Toolbar)`
  background-color: ${COLORS.highlight};
  width: 70vw;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0px 20px 0px;
`;

export const SearchInput = styled(InputBase)`
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 0;
  margin-left: 10px;
  font-weight: 700;
  font-size: 1.25rem !important;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1020px;

  @media (min-width: 1040px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    padding: 10px;
  }
`;
