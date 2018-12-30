import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      accumulator.push(<Divider key={"d" + index} />);
    }
    const icon = currentItem.icon ? (
      <FontAwesomeIcon icon={currentItem.icon} />
    ) : null;
    accumulator.push(
      <Button
        key={"b" + index}
        onClick={() => props.onItemClick(currentItem.id)}
      >
        {icon}
        {currentItem.caption}
      </Button>
    );
    return accumulator;
  }, []);

  return <Container>{items}</Container>;
};

export default ButtonMenu;
