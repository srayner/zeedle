import React from "react";
import styled from "styled-components";
import { Button } from "../ui/button";

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Caption = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

const BoardTitle = props => {
  return (
    <Container>
      <Caption>{props.caption}</Caption>
      <Button>Delete Board</Button>
    </Container>
  );
};
export default BoardTitle;
