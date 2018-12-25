import React from "react";
import styled from "styled-components";
import { Button } from "../ui/button";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import boardMenuData from "../../data/board-menu";
import PopupMenu from "../ui/popup-menu";
import { showBoardMenu, hideBoardMenu } from "../../actions/board";
import { connect } from "react-redux";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
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
  menuClick = itemId => {
    this.props.hideBoardMenu();
    switch (itemId) {
      case "DELETE": {
        this.props.onDeleteClick();
        break;
      }
      default: {
      }
    }
  };
  componentDidMount() {
    boardMenuData.onClose = this.props.hideBoardMenu;
    boardMenuData.onItemClick = this.menuClick;
  }

  render() {
    const { menuVisible, caption, showBoardMenu } = this.props;
    const menu = menuVisible ? <PopupMenu {...boardMenuData} /> : null;
    console.log(menuVisible);
    return (
      <Container>
        <Caption>{caption}</Caption>
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
