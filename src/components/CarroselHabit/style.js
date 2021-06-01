import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import Button from "@material-ui/core/Button";

export const ContainerCarrosel = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  text-align: -webkit-center;
`;

export const DivButtonAllHabit = styled.div`
  text-align-last: center;
  transform: translatey(-10px);
`;

export const Notification = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.gray};
  font-family: ${FONTS.normal};
  text-align: center;
`;

export const ButtonAllGroups = styled(Button)`
  color: ${COLORS.textHighlight} !important;
  background-color: ${COLORS.highlight} !important;
`;
