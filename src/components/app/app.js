import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";
import Home from "../home/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeButton from "./home-button";
import BoardButton from "./board-button";
import styled from "styled-components";

const StyledLink = styled(Link)`
  focus: {
    outline: none;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TitleBar>
            <StyledLink to="/">
              <HomeButton />
            </StyledLink>
            <Link to="/board/">
              <BoardButton />
            </Link>
            zeedle
          </TitleBar>
          <Route path="/" exact component={Home} />
          <Route path="/board/:boardId" component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
