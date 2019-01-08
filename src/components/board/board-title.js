import React from "react";
import styled from "styled-components";
import { Button } from "../ui/button";
import {
  faEllipsisH,
  faStar as faSolidStar
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoardMenu from "./board-menu";
import PopupMenu from "../ui/popup-menu";
import { showBoardMenu, hideBoardMenu, starBoard } from "../../actions/board";
import { connect } from "react-redux";
import ButtonMenu from "../ui/button-menu";
import {
  startChangeBoardVisibility,
  cancelChangeBoardVisibility,
  endChangeBoardVisibility
} from "../../actions/board";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  margin-left: 20px;
  margin-right: auto;
`;

const Caption = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
`;

class BoardTitle extends React.Component {
  getButtonMenuItems = () => {
    const starItem = this.props.starred
      ? { id: "UNSTAR", icon: faSolidStar }
      : { id: "STAR", icon: faStar };
    return [
      starItem,
      { caption: "Personal", id: "GROUP" },
      { caption: this.props.board.visibility, id: "VISIBILITY" }
    ];
  };

  buttonMenuItemClick = (itemId, target) => {
    var rect = target.getBoundingClientRect();
    switch (itemId) {
      case "STAR": {
        this.props.starBoard(this.props.board, true);
        break;
      }
      case "UNSTAR": {
        this.props.starBoard(this.props.board, false);
        break;
      }
      case "GROUP": {
        alert("Change group");
        break;
      }
      case "VISIBILITY": {
        const top = parseInt(rect.top - 14) + "px";
        const left = parseInt(rect.left) + "px";
        this.props.startChangeBoardVisibility({ top, left });
        break;
      }
    }
  };

  visibilityMenuItemClick = itemId => {
    const visibility =
      itemId.charAt(0).toUpperCase() + itemId.toLowerCase().slice(1);
    this.props.endChangeBoardVisibility(visibility);
  };

  renderPopup() {
    const { menuVisible, visibilityMenu } = this.props;
    if (menuVisible) {
      return <BoardMenu />;
    }
    if (visibilityMenu.visible) {
      return (
        <PopupMenu
          {...visibilityMenu}
          onItemClick={this.visibilityMenuItemClick}
          onClose={this.props.cancelChangeBoardVisibility}
        />
      );
    }
  }

  render() {
    const { caption, showBoardMenu } = this.props;
    const buttonMenuItems = this.getButtonMenuItems();
    const popup = this.renderPopup();
    return (
      <Container>
        <Caption onClick={() => this.props.onClickTitle()}>{caption}</Caption>
        <MenuContainer>
          <ButtonMenu
            items={buttonMenuItems}
            onItemClick={this.buttonMenuItemClick}
          />
        </MenuContainer>
        <Button
          onClick={() => {
            showBoardMenu();
          }}
        >
          <FontAwesomeIcon icon={faEllipsisH} /> Show Menu
        </Button>
        {popup}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    menuVisible: state.board.boardMenuVisible,
    visibilityMenuPosition: state.app.visibilityMenuPosition,
    changingBoardVisibility: state.app.changingBoardVisibility,
    visibilityMenu: state.visibilityMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBoardMenu: () => dispatch(showBoardMenu()),
    hideBoardMenu: () => dispatch(hideBoardMenu()),
    startChangeBoardVisibility: (x, y) =>
      dispatch(startChangeBoardVisibility(x, y)),
    cancelChangeBoardVisibility: () => dispatch(cancelChangeBoardVisibility()),
    endChangeBoardVisibility: visibility =>
      dispatch(endChangeBoardVisibility(visibility)),
    starBoard: (board, starred) => dispatch(starBoard(board, starred))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardTitle);
