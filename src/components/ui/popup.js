import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 10px 10px 0 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  border: 1px solid #789;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-font-smoothing: auto;
  z-index: 99;
`;

const Header = styled.div`
  padding: 5px 5px 10px 5px;
  position: relative;
  text-align: center;
  color: #789;
`;

const Title = styled.span``;

const Close = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 22px;
  line-height: 24px;
  ::before {
    content: "\00d7";
    font-size: 22px;
    font-weight: 300;
  }
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const Body = styled.div``;

const Popup = props => {
  return (
    <Container position={props.position} width={props.width}>
      <Header>
        <Title>{props.title}</Title>
        <Close
          onClick={() => {
            props.onClose(props.id);
          }}
        />
      </Header>
      <Body />
    </Container>
  );
};
export default Popup;
