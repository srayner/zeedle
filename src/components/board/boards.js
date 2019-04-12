import React from "react";
import BoardLink from "./board-link";
import { connect } from "react-redux";
import { loadBoards } from "../../actions/board";
import Container from "../ui/container";
import Modal from "../ui/modal";
import QuickLinkList from "../ui/quick-link-list";
import styled from "styled-components";
import NewBoard from "./new-board";
import NewBoardLink from "./new-board-link";
import BoardListTitle from "./board-list-title";
import { startAddBoard, cancelAddBoard, endAddBoard } from "../../actions/app";
import { Redirect } from "react-router-dom";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faStar } from "@fortawesome/free-solid-svg-icons";

const Page = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 200px auto;
  background-color: #ffffff;
  padding: 10px;
`;

const HomeTitle = styled.h2`
  margin: 0 8px;
  padding: 8px;
  color: black;
  font-weight: 400;
`;

const BoardList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ModalContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const QuickLinkTitle = styled.div`
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

class Boards extends React.Component {
  quickListItems = [
    { key: "/", caption: "Home", icon: faHome, href: "/" },
    { key: "/boards", caption: "Boards", icon: faFlipboard, href: "/boards" }
  ];

  componentDidMount() {
    this.props.loadBoards();
  }

  render() {
    const { token, addingBoard, cancelAddBoard } = this.props;
    if (!token) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: "/boards" }
          }}
        />
      );
    }
    const modal = addingBoard ? (
      <Modal handleClose={cancelAddBoard}>
        <ModalContainer>
          <NewBoard />
        </ModalContainer>
      </Modal>
    ) : null;

    const starredBoards = Object.keys(this.props.boards)
      .map((key, index) => {
        const board = this.props.boards[key];
        if (board.starred) {
          const url = "/board/" + board.id;
          return <BoardLink key={index} to={url} board={board} />;
        }
        return undefined;
      })
      .filter(item => {
        return item !== undefined;
      });

    let starredBoardsSection = null;
    if (starredBoards.length > 0) {
      starredBoardsSection = (
        <nav>
          <BoardListTitle icon={faStar} caption="Starred Boards" />
          <BoardList>{starredBoards}</BoardList>
        </nav>
      );
    }

    const boards = Object.keys(this.props.boards).map((key, index) => {
      const board = this.props.boards[key];
      const url = "/board/" + board.id;
      return <BoardLink key={index} to={url} board={board} />;
    });

    return (
      <Container colour="white">
        <HomeTitle>Boards</HomeTitle>
        <Page>
          <nav>
            <QuickLinkTitle>Quick Links</QuickLinkTitle>
            <QuickLinkList items={this.quickListItems} />
          </nav>
          <div>
            {starredBoardsSection}
            <nav>
              <BoardListTitle icon={faUser} caption="Personal Boards" />
              <BoardList>{boards}</BoardList>
              <NewBoardLink onClick={this.props.startAddBoard}>
                Create new board...
              </NewBoardLink>
            </nav>
          </div>
        </Page>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingBoard: state.app.addingBoard,
    deletingBoard: state.app.deletingBoard,
    boards: state.boards,
    token: state.app.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBoards: () => dispatch(loadBoards()),
    startAddBoard: () => dispatch(startAddBoard()),
    cancelAddBoard: () => dispatch(cancelAddBoard()),
    endAddBoard: () => dispatch(endAddBoard())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards);
