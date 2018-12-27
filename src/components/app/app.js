import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";
import Home from "../home/home";
import Boards from "../board/boards";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeButton from "./home-button";
import BoardsButton from "./boards-button";
import styled from "styled-components";
import LoginPage from "../user/login-page";
import SignupPage from "../user/signup-page";
import ProfileNav from "../profile/profile-nav";

const StyledLink = styled(Link)`
  focus: {
    outline: none;
  }
`;

const RightContainer = styled.div`
  float: right;
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
            <Link to="/boards">
              <BoardsButton />
            </Link>
            zeedle
            <RightContainer>
              <ProfileNav />
            </RightContainer>
          </TitleBar>
          <Route path="/" exact component={Home} />
          <Route path="/boards" exact component={Boards} />
          <Route path="/board/:boardId" component={Board} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
