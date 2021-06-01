import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { COLORS, FONTS } from "../../style";
import { Button } from "@material-ui/core";

export const ProfileIcon = styled(AccountCircleIcon)`
  font-size: 5rem !important;
`;

export const ProfileTitle = styled.h1`
  font-family: ${FONTS.highlight};
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    margin: 0px;
    margin-bottom: 10px;
  }
`;

export const ProfileSubTitle = styled.h2`
  font-family: ${FONTS.normal} !important;
  color: ${COLORS.highlight};
`;

export const ProfileText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  background-color: ${COLORS.dark};
  padding: 10px;
  color: ${COLORS.textHighlight};
  border-radius: 5px;
`;

export const ProfileWrap = styled.div`
  margin: 10px 0px 30px 0;
`;

export const GroupsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;
  margin: 10px !important;

  font-weight: 700 !important;
`;

export const ProfilePerfilContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: center !important;
    height: 300px;
  }
`;

export const ProfileInfoContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: center !important;
    height: 350px;
  }
`;
