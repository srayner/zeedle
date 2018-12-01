import React from "react";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 8px;
  border-radius: 3px;
  padding: 8px;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 36px;
  flex: 0 0 auto;
  transition: background-color 85ms ease;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const NewListLink = props => {
  return (
    <Container onClick={() => props.onClick()}>
      <FontAwesomeIcon icon={faPlus} /> Add another list...
    </Container>
  );
};

export default NewListLink;
