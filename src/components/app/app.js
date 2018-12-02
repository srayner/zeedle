import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";
import Home from "../home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TitleBar>zeedle</TitleBar>
          <Route path="/" exact component={Home} />
          <Route path="/board/" component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
