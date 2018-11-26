import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.a`
  display: block;
  background-color: #dfe3e6;
  border-radius: 3px;
  padding: 6px 12px;
  margin-top: 8px;
  color: #17394d;
  text-decoration: none;
  box-shadow: 0 1px 0 0 #c2ccd1;
  transition-property: background-color, border-color, box-shadow;
  transition-delay: 85ms;
  transition-timing-function: ease;

  :hover {
    color: #092d42;
    background-color: #c2ccd1;
    box-shadow: 0 1px 0 0 #b3bec4;
    text-decoration: none;
  }
`;

const Caption = styled.span`
  color: black;
  font-size: 12px;
  font-weight: 500;
  margin-left: 4px;
`;

const ActionButton = props => {
  return (
    <Button onClick={props.clickHandler}>
      <FontAwesomeIcon icon={props.icon} />
      <Caption>{props.caption}</Caption>
    </Button>
  );
};

export default ActionButton;
