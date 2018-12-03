import React from "react";
import BoardLink from "../home/board-link";
import { connect } from "react-redux";
import { loadBoards } from "../../actions/board";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadBoards();
  }

  render() {
    const boards = Object.keys(this.props.boards).map((key, index) => {
      const board = this.props.boards[key];
      const url = "/board/" + board.id;
      return (
        <BoardLink key={index} to={url}>
          {board.title}
        </BoardLink>
      );
    });

    return (
      <div>
        <h2>Boards</h2>
        <nav>
          <ul>{boards}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBoards: () => dispatch(loadBoards())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
