import React from "react";
import styled from "styled-components";
import Modal from "../ui/modal";

const ModalContainer = styled.div`
  margin-top: 10px;
`;

const DeleteBoardModal = props => {
  return (
    <Modal handleClose={props.cancel}>
      <ModalContainer>
        <h2>Delete Board</h2>
        <p>Are you sure you want to delete this board?</p>
        <button
          onClick={() => {
            props.cancel();
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            props.delete(props.boardId);
          }}
        >
          Yes
        </button>
      </ModalContainer>
    </Modal>
  );
};

export default DeleteBoardModal;
