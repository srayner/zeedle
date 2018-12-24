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
import DeleteBoardModal from "./delete-board-modal";

class Board extends React.Component {
  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadData(boardId);
  }
  render() {
    const modal = this.props.deletingBoard ? (
      <DeleteBoardModal
        cancel={this.props.cancelDeleteBoard}
        delete={this.props.endDeleteBoard}
        boardId={this.props.board.id}
      />
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
