import React from "react";
import styled from "styled-components";
import Modal from "../ui/modal";
import { Button, DangerButton } from "../ui/button";

const ModalContainer = styled.div`
  margin-top: 10px;
`;

const DeleteBoardModal = props => {
  return (
    <Modal handleClose={props.cancel}>
      <ModalContainer>
        <h2>Delete Board</h2>
        <p>Are you sure you want to delete this board?</p>
        <Button
          onClick={() => {
            props.cancel();
          }}
        >
          No
        </Button>
        <DangerButton
          onClick={() => {
            props.delete(props.boardId);
          }}
        >
          Yes
        </DangerButton>
      </ModalContainer>
    </Modal>
  );
};

export default DeleteBoardModal;
