import styled from "styled-components";
import { Link } from "@material-ui/core";
import { ImArrowRight2 } from "react-icons/im";
import { FONTS } from "../../style";

export const FormTitle = styled.h1`
  text-align: center;
  font-family: ${FONTS.highlight};
  font-size: 2.75 !important;
`;

export const FormButtonsWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  p {
    margin: 0.1rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    button {
      box-shadow: none;
    }
  }
`;

export const Square = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${({ color }) => color};
  position: relative;
  top: 50px;
  left: -7px;
  @media (min-width: 1024px) {
    left: 65px;
  }
`;

export const SquareInverse = styled(Square)`
  top: 97px;
  left: 295px;
  @media (min-width: 1024px) {
    left: 388px;
  }
`;

export const Form = styled.form`
  text-align: -webkit-center;
`;

export const ButtonSubmit = styled.button`
  width: 100px;
  height: 100px;
  background: #d24d57;
  box-shadow: 1px 5px 5px #943b41;
  border: none;
  border-radius: 10%;

  outline: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    float: none;
    width: 100px;
    border-radius: 10px;
    height: 100px;
    margin: 15px 35px;
  }
`;

export const ButtonIcon = styled(ImArrowRight2)`
  color: white;
  font-size: 35px;
`;

export const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 34px 10px 0px;
  cursor: pointer;

  @media (min-width: 1024px) {
    p {
      margin: 0.1rem;
      float: left;
    }
  }
`;

export const LabelSignInRegiter = styled.label`
  color: black !important;
  font-size: 2rem;
  font-family: ${FONTS.normal};
  text-decoration: none !important;
`;

export const LinkSignInRegiter = styled(Link)`
  color: #747a7e !important;
  font-size: 1rem;
  margin: 12px 28px !important;
  cursor: pointer;
`;
