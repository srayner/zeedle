import React from "react";
import { connect } from "react-redux";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import {
  loadData,
  starBoard,
  startChangeColour,
  cancelChangeColour,
  endChangeColour,
  startChangeBoardTitle,
  cancelChangeBoardTitle
} from "../../actions/board";
import Container from "../ui/container";
import {
  startDeleteBoard,
  endDeleteBoard,
  cancelDeleteBoard
} from "../../actions/app";
import DeleteBoardModal from "./delete-board-modal";
import ChangeColourModal from "./change-colour-modal";
import ChangeTitlePopup from "./change-title-popup";
import PopupMenu from "../ui/popup-menu";

class Board extends React.Component {
  changeColour = newColour => {
    this.props.endChangeColour(this.props.board, newColour);
  };

  star = () => {
    this.props.star(this.props.board, true);
  };

  unstar = () => {
    this.props.star(this.props.board, false);
  };

  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadData(boardId);
  }
  render() {
    let modal = null;
    if (this.deletingBoard) {
      modal = (
        <DeleteBoardModal
          cancel={this.props.cancelDeleteBoard}
          delete={this.props.endDeleteBoard}
          boardId={this.props.board.id}
        />
      );
    }
    if (this.props.changingColour) {
      modal = (
        <ChangeColourModal
          cancel={this.props.cancelChangeColour}
          change={this.changeColour}
        />
      );
    }
    if (this.props.changingBoardTitle) {
      modal = (
        <ChangeTitlePopup
          title={this.props.board.title}
          onClose={this.props.cancelChangeBoardTitle}
        />
      );
    }

    return (
      <Container colour={this.props.board.colour}>
        <BoardTitle
          caption={this.props.board.title}
          onClickTitle={() =>
            this.props.startChangeBoardTitle(this.props.board.title)
          }
          onDeleteClick={this.props.startDeleteBoard}
          onStar={this.star}
          onUnstar={this.unstar}
          onChangeBackground={this.props.startChangeColour}
          starred={this.props.board.starred}
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
    deletingBoard: state.app.deletingBoard,
    changingColour: state.app.changingColour,
    changingBoardTitle: state.app.changingBoardTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: boardId => dispatch(loadData(boardId)),
    startDeleteBoard: () => dispatch(startDeleteBoard()),
    endDeleteBoard: boardId => dispatch(endDeleteBoard(boardId)),
    cancelDeleteBoard: () => dispatch(cancelDeleteBoard()),
    star: (board, starred) => dispatch(starBoard(board, starred)),
    startChangeColour: () => dispatch(startChangeColour()),
    cancelChangeColour: () => dispatch(cancelChangeColour()),
    endChangeColour: (board, newColour) =>
      dispatch(endChangeColour(board, newColour)),
    startChangeBoardTitle: currentTitle =>
      dispatch(startChangeBoardTitle(currentTitle)),
    cancelChangeBoardTitle: () => dispatch(cancelChangeBoardTitle())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
