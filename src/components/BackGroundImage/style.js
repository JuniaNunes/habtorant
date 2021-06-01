import styled from "styled-components";

export const BackGroundImageStyled = styled.div`
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: 200%;
  background-position: 50% 10%;
  width: 100vw;
  height: 30vh;

  @media (min-width: 1024px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-size: cover;
  }
`;
