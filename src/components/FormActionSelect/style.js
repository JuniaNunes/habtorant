import styled from "styled-components";
import { animationInput, ContainerInput } from "../FormUserInput/style";

export const ContainerSelect = styled(ContainerInput)`
  animation: ${animationInput} 0.3s forwards;
`;

export const Select = styled.select`
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 3.5rem;

  font-size: 1rem;
  padding-left: 0.5rem;
  background-color: #e8f0fe;
  border: 2px solid #b7bfcc;
  padding-top: 0.3rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;

  background-image: url("./icons/seta-drop.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
`;

export const SetaDrop = styled.div`
  background-image: url("./icons/seta-drop.svg");
`;
