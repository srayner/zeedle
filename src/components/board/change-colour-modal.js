import React from "react";
import styled from "styled-components";
import Modal from "../ui/modal";
import ColourPalette from "../ui/color-palette";
import colours from "../../data/colours.js";

const ModalContainer = styled.div`
  margin-top: 10px;
`;

const ChangeColourModal = props => {
  return (
    <Modal handleClose={props.cancel}>
      <ModalContainer>
        <h2>Change Background Colour</h2>
        <p>Select a new colour:</p>
        <ColourPalette
          colours={colours}
          onClick={newColour => props.change(props.boardId, newColour)}
        />
      </ModalContainer>
    </Modal>
  );
};

export default ChangeColourModal;
