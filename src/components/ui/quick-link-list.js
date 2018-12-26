import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = styled.ul`
  padding: 20px;
  margin: 0;
`;

const Item = styled.li`
  margin: 0;
  padding: 0 0 10px 0;
  list-style: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const QuickLinkList = props => {
  const items = props.items.map(item => {
    return (
      <Item>
        <Icon icon={item.icon} />
        {item.caption}
      </Item>
    );
  });
  return <List>{items}</List>;
};

export default QuickLinkList;
