import React from "react";
import styled from "styled-components";
import ActionButton from "./action-button";

const Container = styled.div`
  width: 200px;
`;

const Title = styled.h3`
  color: #6b808c;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

class ButtonList extends React.Component {
  render() {
    const innerList = this.props.buttons.map((button, index) => {
      return (
        <ActionButton key={index} caption={button.caption} icon={button.icon}>
          {button.caption}
        </ActionButton>
      );
    });
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {innerList}
      </Container>
    );
  }
}

export default ButtonList;
