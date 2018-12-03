import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import { loadData } from "../../actions/board";
import Container from "../ui/container";

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
