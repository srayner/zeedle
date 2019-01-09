import React from "react";
import styled from "styled-components";
import { SuccessButton, CloseButton } from "../ui/button";
import Text from "../ui/text";
import {
  addListUpdateContent,
  addListCancel,
  addListEnd
} from "../../actions/board";
import { connect } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  border: none;
  border-radius: 3px;
  padding: 8px;
  margin: 0;
  background-color: #e2e4e6;
  width: 250px;
`;

const ButtonContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

class NewListControls extends React.Component {
  render() {
    const { board, newListTitle, onChange, onSubmit, onCancel } = this.props;
    return (
      <Container>
        <Text
          placeholder="Enter list title..."
          value={newListTitle}
          onChange={event => {
            onChange(event.target.value);
          }}
        />
        <ButtonContainer>
          <SuccessButton
            type="primary"
            onClick={() => {
              onSubmit(board, newListTitle);
            }}
          >
            Add List
          </SuccessButton>
          <CloseButton
            onClick={() => {
              onCancel();
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    newListTitle: state.app.newListTitle,
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: content => dispatch(addListUpdateContent(content)),
    onCancel: list => dispatch(addListCancel(list)),
    onSubmit: (board, newListTitle) => dispatch(addListEnd(board, newListTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewListControls);
