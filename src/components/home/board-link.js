import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  height: 100px;
  width: 200px;
  background-color: rgb(0, 121, 191);
  list-style: none;
  margin: 20px;
`;

const BoardLink = props => {
  return (
    <ListItem>
      <Link to={props.to}>{props.board.title}</Link>
    </ListItem>
  );
};

export default BoardLink;
