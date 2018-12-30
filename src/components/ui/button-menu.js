import React from "react";
import styled from "styled-components";
import { TransparentButton } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Divider = styled.span`
  margin: 8px 5px;
  padding: 0;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
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
      <TransparentButton
        key={"b" + index}
        onClick={() => props.onItemClick(currentItem.id)}
      >
        {icon}
        {currentItem.caption}
      </TransparentButton>
    );
    return accumulator;
  }, []);

  return <Container>{items}</Container>;
};

export default ButtonMenu;
