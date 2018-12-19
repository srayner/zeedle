import React from "react";
import styled from "styled-components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  padding: 0 28px;
  font-size: 18px;
`;

const Caption = styled.span`
  padding: 0 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const BoardListTitle = props => {
  return (
    <Container>
      <FontAwesomeIcon icon={faUser} />
      <Caption>{props.caption}</Caption>
    </Container>
  );
};

export default BoardListTitle;
