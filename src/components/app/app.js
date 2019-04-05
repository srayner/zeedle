import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";
import Home from "../home/home";
import Boards from "../board/boards";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "../user/login-page";
import SignupPage from "../user/signup-page";
import Profile from "../profile/profile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TitleBar />
          <Route path="/" exact component={Home} />
          <Route path="/boards" exact component={Boards} />
          <Route path="/board/:boardId" component={Board} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
