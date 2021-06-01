import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

export const GobalLoadingStyled = styled(CircularProgress)`
  color: #ff4654 !important;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
