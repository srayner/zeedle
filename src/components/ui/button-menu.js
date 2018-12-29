import React from "react";
import styled from "styled-components";
import { Button } from "./button";

const Divider = styled.div`
  margin: 0 5px;
  padding: 0;
  border: none;
  border-left: 1px solid #000;
`;

const Container = styled.div`
  display: flex;
`;

const ButtonMenu = props => {
  const items = props.items.reduce((accumulator, currentItem, index) => {
    if (index > 0) {
      accumulator.push(<Divider key={index} />);
    }
    accumulator.push(
      <Button key={index} onClick={() => props.onItemClick(currentItem.id)}>
        {currentItem.icon}
        {currentItem.caption}
      </Button>
    );
    return accumulator;
  }, []);

  return <Container>{items}</Container>;
};

export default ButtonMenu;
