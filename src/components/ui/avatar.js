import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: ${props => {
    return props.colour || "rgba(255, 255, 255, 0.3)";
  }};
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 50%;
  vertical-align: center;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
`;

const Avatar = props => {
  return (
    <Container colour={props.colour} onClick={() => props.onClick()}>
      {props.children}
    </Container>
  );
};

export default Avatar;
