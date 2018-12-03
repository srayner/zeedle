import React from "react";
import BoardLink from "../home/board-link";
import { connect } from "react-redux";
import { loadBoards } from "../../actions/board";
import Page from "../ui/page";
import Container from "../ui/container";
import styled from "styled-components";

const HomeTitle = styled.h2`
  margin: 0 8px;
  padding: 8px;
  color: black;
  font-weight: 400;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.loadBoards();
  }

  render() {
    const boards = Object.keys(this.props.boards).map((key, index) => {
      const board = this.props.boards[key];
      const url = "/board/" + board.id;
      return <BoardLink key={index} to={url} board={board} />;
    });

    return (
      <Container backgroundColor="white">
        <HomeTitle>Boards</HomeTitle>
        <Page>
          <nav>
            <ul>{boards}</ul>
          </nav>
        </Page>
      </Container>
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
