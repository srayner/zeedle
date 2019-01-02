import React from "react";
import styled from "styled-components";
import Modal from "../ui/modal";

const ModalContainer = styled.div`
  margin-top: 10px;
`;

const ChangeTitleModal = props => {
  return (
    <Modal handleClose={props.cancel}>
      <ModalContainer>
        <h2>Rename Board</h2>
      </ModalContainer>
    </Modal>
  );
};

export default ChangeTitleModal;
