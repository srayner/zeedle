import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar>zeedle</TitleBar>
        <Board />
      </div>
    );
  }
}

export default App;
