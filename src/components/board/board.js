import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import { loadData } from "../../actions/board";

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 54px;
  bottom: 0;
  left: 0;
  right: 0;
`;

class Board extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <Container>
        <BoardTitle>{this.props.board.title}</BoardTitle>
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
    loadData: () => dispatch(loadData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
