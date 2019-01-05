import React from "react";
import styled from "styled-components";
import { Button } from "../ui/button";
import {
  faEllipsisH,
  faStar as faSolidStar
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getBoardMenuData from "../../data/board-menu";
import PopupMenu from "../ui/popup-menu";
import { showBoardMenu, hideBoardMenu } from "../../actions/board";
import { connect } from "react-redux";
import ButtonMenu from "../ui/button-menu";
import {
  startChangeBoardVisibility,
  cancelChangeBoardVisibility,
  endChangeBoardVisibility
} from "../../actions/board";
import visibilityMenuData from "../../data/visibility-menu";

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
      { caption: "Private", id: "VISIBILITY" }
    ];
  };

  buttonMenuItemClick = (itemId, target) => {
    var rect = target.getBoundingClientRect();
    switch (itemId) {
      case "STAR": {
        alert("Star board");
        break;
      }
      case "UNSTAR": {
        alert("Unstar board");
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

  menuClick = itemId => {
    this.props.hideBoardMenu();
    switch (itemId) {
      case "DELETE": {
        this.props.onDeleteClick();
        break;
      }
      case "STAR": {
        this.props.onStar();
        break;
      }
      case "UNSTAR": {
        this.props.onUnstar();
        break;
      }
      case "BACKGROUND": {
        this.props.onChangeBackground();
        break;
      }
      default: {
      }
    }
  };

  renderPopup() {
    const {
      menuVisible,
      changingBoardVisibility,
      visibilityMenuPosition
    } = this.props;
    if (menuVisible) {
      const boardMenuData = getBoardMenuData(this.props.starred);
      boardMenuData.onClose = this.props.hideBoardMenu;
      boardMenuData.onItemClick = this.menuClick;
      return <PopupMenu {...boardMenuData} />;
    }
    if (changingBoardVisibility) {
      return (
        <PopupMenu {...visibilityMenuData} position={visibilityMenuPosition} />
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
    menuVisible: state.board.boardMenuVisible,
    visibilityMenuPosition: state.app.visibilityMenuPosition,
    changingBoardVisibility: state.app.changingBoardVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBoardMenu: () => dispatch(showBoardMenu()),
    hideBoardMenu: () => dispatch(hideBoardMenu()),
    startChangeBoardVisibility: (x, y) =>
      dispatch(startChangeBoardVisibility(x, y)),
    cancelChangeBoardVisibility: () => dispatch(cancelChangeBoardVisibility())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardTitle);
