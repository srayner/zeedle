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

  buttonMenuItemClick = itemId => {
    alert(itemId);
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

  render() {
    const buttonMenuItems = this.getButtonMenuItems();
    const boardMenuData = getBoardMenuData(this.props.starred);
    boardMenuData.onClose = this.props.hideBoardMenu;
    boardMenuData.onItemClick = this.menuClick;
    const { menuVisible, caption, showBoardMenu } = this.props;
    const menu = menuVisible ? <PopupMenu {...boardMenuData} /> : null;
    return (
      <Container>
        <Caption onClick={() => this.props.onClickTitle()}>{caption}</Caption>
        <MenuContainer>
          <ButtonMenu items={buttonMenuItems} />
        </MenuContainer>
        <Button
          onClick={() => {
            showBoardMenu();
          }}
        >
          <FontAwesomeIcon icon={faEllipsisH} /> Show Menu
        </Button>
        {menu}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.board.boardMenuVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBoardMenu: () => dispatch(showBoardMenu()),
    hideBoardMenu: () => dispatch(hideBoardMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardTitle);
