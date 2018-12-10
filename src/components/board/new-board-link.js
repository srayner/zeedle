import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px;
  border-radius: 3px;
  width: 180px;
  height: 90px;
  color: #6b808c;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  font-family: "Roboto", sans-serif;
  &:hover {
    cursor: pointer;
    color: #17394d;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const NewBoardLink = props => {
  return <Div onClick={props.onClick}>{props.children}</Div>;
};

export default NewBoardLink;
