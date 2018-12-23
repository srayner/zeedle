import React from "react";
import styled from "styled-components";
import { DangerButton } from "../ui/button";

const Container = styled.div`
  box-sizing: border-box;
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
  line-height: 34px;
`;

const BoardTitle = props => {
  return (
    <Container>
      <Caption>{props.caption}</Caption>
      <DangerButton
        onClick={() => {
          props.onDeleteClick();
        }}
      >
        Delete Board
      </DangerButton>
    </Container>
  );
};
export default BoardTitle;
