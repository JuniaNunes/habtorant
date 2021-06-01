import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { COLORS } from "../../style";

export const NoticiationContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressBarClassName: "progress",
})`
  /* .toast-container */
  width: 100%;
  margin-top: 10vh;

  @media (min-width: 1024px) {
    margin-top: -10vh;
  }

  /* .toast is passed to toastClassName */
  .toast {
    background-color: ${COLORS.highlight};
    border: 2px solid ${COLORS.dark};
    color: ${COLORS.textHighlight};
    font-weight: 700;
  }
`;
