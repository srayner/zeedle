import React from "React";
import styled from "styled-components";
import BoardTitle from "./board-title";
import BoardBody from "./board-body";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

class Board extends React.Component {
  render() {
    return (
      <Container>
        <BoardTitle />
        <BoardBody />
      </Container>
    );
  }
}

export default Board;
