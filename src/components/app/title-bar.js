import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import HomeButton from "./home-button";
import BoardsButton from "./boards-button";
import ProfileNav from "../profile/profile-nav";
import Title from "./title";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8px;
  font-family: "Rouge Script", cursive;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px;
  color: #6fa0db;
  text-align: center;
  cursor: default;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`;

const StyledLink = styled(Link)`
  &:focus {
    outline: none;
  }
`;

const RightContainer = styled.div`
  margin-left: auto;
`;

class TitleBar extends React.Component {
  render() {
    const backgroundColour = this.props.board
      ? this.props.board.colour
      : "205785";
    console.log("backgroundColour", backgroundColour);
    return (
      <Container>
        <StyledLink to="/">
          <HomeButton />
        </StyledLink>
        <StyledLink to="/boards">
          <BoardsButton />
        </StyledLink>
        <Title backgroundColour={backgroundColour}>zeedle</Title>
        <RightContainer>
          <ProfileNav />
        </RightContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

export default connect(
  mapStateToProps,
  null
)(TitleBar);
