import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import Button from "@material-ui/core/Button";

export const HomeContainer = styled.div`
  margin-top: -30px;
`;

export const HomeTitle = styled.h1`
  font-family: ${FONTS.normal};
  font-weight: 500;
  text-align-last: center;
  font-family: ${FONTS.normal} !important;
  font-size: 2rem !important;
  margin-top: 40px;

  @media (min-width: 1024px) {
    font-size: 35px !important;
    margin-top: 13px;
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

export const HomeGroupWrap = styled.div`
  margin: 60px 0;
`;
export const HomeHabitWrap = styled.div``;

export const Group = styled.div`
  padding: 0rem 0 0rem 0;
  text-align: center;
  div {
    max-width: 300px;
    width: 100%;
    padding: 1rem 0 2rem 0;
  }
`;

export const DivButtonAllHabit = styled.div`
  text-align-last: center;
  transform: translatey(20px);
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
  transform: translatey(20px);
`;
