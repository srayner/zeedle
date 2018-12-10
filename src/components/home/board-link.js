import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  list-style: none;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  margin: 20px;
  border-radius: 3px;
  padding: 8px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  background-color: #205785;
  width: 180px;
  height: 90px;
  flex: 0 0 auto;
  display: block;
  transition: background-color 85ms ease;
  &:hover {
    cursor: pointer;
    color: #fdfdfd;
    background-color: #084573;
    text-decoration: none;
  }
`;

const BoardLink = props => {
  return (
    <ListItem>
      <StyledLink to={props.to}>{props.board.title}</StyledLink>
    </ListItem>
  );
};

export default BoardLink;
