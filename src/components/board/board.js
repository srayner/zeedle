import React from "react";
import { connect } from "react-redux";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import { loadData } from "../../actions/board";
import Container from "../ui/container";
import { startDeleteBoard } from "../../actions/app";

class Board extends React.Component {
  componentDidMount() {
    const { boardId } = this.props.match.params;
    this.props.loadData(boardId);
  }
  render() {
    return (
      <Container>
        <BoardTitle
          caption={this.props.board.title}
          deleteClickHandler={this.props.onDeleteHandler}
        />
        <BoardBody />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: boardId => dispatch(loadData(boardId)),
    onDeleteHandler: boardId => dispatch(startDeleteBoard(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
