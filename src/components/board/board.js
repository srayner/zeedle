import React from "react";
import { connect } from "react-redux";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import { loadData } from "../../actions/board";
import Container from "../ui/container";
import {
  startDeleteBoard,
  endDeleteBoard,
  cancelDeleteBoard
} from "../../actions/app";
import Modal from "../ui/modal";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

class Board extends React.Component {
  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadData(boardId);
  }
  render() {
    const modal = this.props.deletingBoard ? (
      <Modal handleClose={this.props.cancelDeleteBoard}>
        <ModalContainer>
          <h2>Delete Board</h2>
          <p>Are you sure you want to delete this board?</p>
          <button
            onClick={() => {
              this.props.cancelDeleteBoard();
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              this.props.endDeleteBoard(this.props.board.id);
            }}
          >
            Yes
          </button>
        </ModalContainer>
      </Modal>
    ) : null;

    return (
      <Container>
        <BoardTitle
          caption={this.props.board.title}
          onDeleteClick={this.props.startDeleteBoard}
        />
        <BoardBody />
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    deletingBoard: state.app.deletingBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: boardId => dispatch(loadData(boardId)),
    startDeleteBoard: () => dispatch(startDeleteBoard()),
    endDeleteBoard: boardId => dispatch(endDeleteBoard(boardId)),
    cancelDeleteBoard: () => dispatch(cancelDeleteBoard())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
