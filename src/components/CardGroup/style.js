import styled from "styled-components";

export const GroupItem = styled.div`
  border: 1px solid #000;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;

  background-color: #ff4654;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  margin-top: 1rem;
  transition: 0.2s;
  &:hover {
    background-color: #a02b34;
  }

  cursor h2 {
    margin-bottom: 7px;
  }

  p {
    margin: 5px;
    font-size: 0.875rem;
  }
`;
