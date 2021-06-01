import { Link } from "@material-ui/core";
import styled from "styled-components";

import { COLORS, FONTS } from "../../style";

export const HabitTitle = styled.h2`
  color: ${COLORS.text};
  font-family: ${FONTS.normal};
  margin: 12px 9px;
  font-size: 2rem;
`;

export const LinkHabit = styled(Link)`
  color: ${COLORS.highlight} !important;
  font-family: ${FONTS.normal} !important;
  padding: 10px;
`;

export const LinkAddHabit = styled(Link)`
  color: #b7bfcc !important;
  font-family: ${FONTS.normal} !important;
  padding: 10px;
`;
