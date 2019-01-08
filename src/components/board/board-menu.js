import React from "react";
import getBoardMenuData from "../../data/board-menu";
import PopupMenu from "../ui/popup-menu";
import { hideBoardMenu } from "../../actions/board";
import { starBoard, startChangeColour } from "../../actions/board";
import { startDeleteBoard } from "../../actions/app";
import { connect } from "react-redux";

class BoardMenu extends React.Component {
  itemClick = itemId => {
    this.props.hideBoardMenu();
    switch (itemId) {
      case "DELETE": {
        this.props.startDeleteBoard();
        break;
      }
      case "STAR": {
        this.props.star(this.props.board, true);
        break;
      }
      case "UNSTAR": {
        this.props.star(this.props.board, false);
        break;
      }
      case "BACKGROUND": {
        this.props.startChangeColour();
        break;
      }
      default: {
      }
    }
  };

  render() {
    const menuData = getBoardMenuData(this.props.board.starred);
    return (
      <PopupMenu
        {...menuData}
        onClose={this.props.hideBoardMenu}
        onItemClick={this.itemClick}
      />
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
    hideBoardMenu: () => dispatch(hideBoardMenu()),
    star: (board, starred) => dispatch(starBoard(board, starred)),
    startChangeColour: () => dispatch(startChangeColour()),
    startDeleteBoard: () => dispatch(startDeleteBoard())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardMenu);
