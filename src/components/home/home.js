import React from "react";
import BoardLink from "../home/board-link";
import { connect } from "react-redux";
import { loadBoards } from "../../actions/board";
import Container from "../ui/container";
import styled from "styled-components";
import NewBoardLink from "../board/new-board-link";
import Modal from "../ui/modal";
import { startAddBoard, cancelAddBoard, endAddBoard } from "../../actions/app";
import NewBoard from "../board/new-board";
import { Redirect } from "react-router-dom";
import BoardListTitle from "../board/board-list-title";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const QuickLinkList = styled.ul`
  padding: 20px;
  margin: 0;
`;

const QuickLink = styled.li`
  margin: 0;
  padding: 0 0 10px 0;
  list-style: none;
`;

class Home extends React.Component {
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
            state: { referrer: "/" }
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

    const boards = Object.keys(this.props.boards).map((key, index) => {
      const board = this.props.boards[key];
      const url = "/board/" + board.id;
      return <BoardLink key={index} to={url} board={board} />;
    });

    return (
      <Container backgroundColor="white">
        <HomeTitle>Home</HomeTitle>
        <Page>
          <nav>
            <QuickLinkTitle>Quick Links</QuickLinkTitle>
            <QuickLinkList>
              <QuickLink>
                <FontAwesomeIcon icon={faHome} />
                Home
              </QuickLink>
              <QuickLink>
                <FontAwesomeIcon icon={faFlipboard} />
                Boards
              </QuickLink>
            </QuickLinkList>
          </nav>
          <nav>
            <BoardListTitle caption="Personal Boards" />
            <BoardList>{boards}</BoardList>
            <NewBoardLink onClick={this.props.startAddBoard}>
              Create new board...
            </NewBoardLink>
          </nav>
        </Page>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingBoard: state.app.addingBoard,
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
)(Home);
