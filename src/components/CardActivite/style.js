import styled from "styled-components";
import { COLORS, FONTS } from "../../style";

export const ActiviteItem = styled.div`
  width: 281px;
  margin: 6px auto;
  background-color: ${COLORS.highlight};
  border-radius: 5px;
  border: none;
  color: ${COLORS.textHighlight};
  font-family: ${FONTS.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`;
