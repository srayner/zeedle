import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";

const List = styled.ul`
  padding: 20px;
  margin: 0;
`;

const Link = styled(RouterLink)`
  padding: 10px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  display: block;
  :hover {
    color: black;
    background-color: #eee;
    text-decoration: none;
  }
  :focus {
    outline: none;
  }
`;

const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const QuickLinkList = props => {
  const items = props.items.map(item => {
    return (
      <Link key={item.href} to={item.href}>
        <Item>
          <Icon icon={item.icon} fixedWidth />
          {item.caption}
        </Item>
      </Link>
    );
  });
  return <List>{items}</List>;
};

export default QuickLinkList;
