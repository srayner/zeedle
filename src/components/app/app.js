import React from "react";
import TitleBar from "./title-bar";
import Board from "../board/board";
import Home from "../home/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeButton from "./home-button";
import BoardButton from "./board-button";
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
            <Link to="/board/">
              <BoardButton />
            </Link>
            zeedle
            <RightContainer>
              <ProfileNav />
            </RightContainer>
          </TitleBar>
          <Route path="/" exact component={Home} />
          <Route path="/board/:boardId" component={Board} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
