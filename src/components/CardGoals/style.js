import styled from "styled-components";
import { COLORS, FONTS } from "../../style";
import { AiFillEdit } from "react-icons/ai";

export const GoalsContainer = styled.div`
  width: 284px;

  border-radius: 10px;
  border: none;
  color: ${COLORS.textHighlight};
  font-family: ${FONTS.normal};

  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin-top: 10px;

  h2 {
    margin-bottom: 7px;
    margin-top: 16px;
    max-width: 291px;
    max-height: 55px;
    text-align: center;
  }

  p {
    margin: 5px;
    font-size: 0.875rem;
  }

  p:last-child {
    margin: 20px;
    font-size: 1rem;
  }
`;

export const IconEdit = styled(AiFillEdit)`
  color: white;
  height: 27px;
  width: 115px;
  position: absolute;
`;
