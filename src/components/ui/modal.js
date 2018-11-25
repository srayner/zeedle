import React from "react";
import styled from "styled-components";
import { LargeCloseButton } from "./button";

// get our fontawesome imports
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback */
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.section`
  background-color: #ebeef0;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 6px;
  width: 70%;
  position: relative;
`;

const modal = ({ handleClose, children }) => {
  return (
    <Container>
      <Content>
        <LargeCloseButton onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </LargeCloseButton>

        {children}
      </Content>
    </Container>
  );
};

export default modal;
