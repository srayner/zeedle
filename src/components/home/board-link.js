import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  height: 10px;
  width: 200px;
  background-color: cyan;
`;

const BoardLink = props => {
  return (
    <ListItem>
      <Link to={props.to}>Task List</Link>;
    </ListItem>
  );
};

export default BoardLink;
