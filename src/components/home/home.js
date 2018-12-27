import React from "react";
import { connect } from "react-redux";
import Container from "../ui/container";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import QuickLinkList from "../ui/quick-link-list";

const Page = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 200px auto;
  background-color: #ffffff;
  padding: 10px;
`;

const HomeTitle = styled.h2`
  margin: 0 8px;
  padding: 8px;
  color: black;
  font-weight: 400;
`;

const QuickLinkTitle = styled.div`
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

class Home extends React.Component {
  quickListItems = [
    { caption: "Home", icon: faHome, href: "/" },
    { caption: "Boards", icon: faFlipboard, href: "/boards" }
  ];

  render() {
    const { token } = this.props;
    if (!token) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: "/" }
          }}
        />
      );
    }

    return (
      <Container backgroundColor="white">
        <HomeTitle>Home</HomeTitle>
        <Page>
          <nav>
            <QuickLinkTitle>Quick Links</QuickLinkTitle>
            <QuickLinkList items={this.quickListItems} />
          </nav>
          <div>
            <h3>Welcome to Zeedle</h3>
            <p>
              Zeedle is a Trello clone example react application, built for
              learning purposes. It does not include all the features available
              in the real Trello application, but is a fully functional to do
              application. After signing up, you can start managing task lists
              within multiple trello style boards.
            </p>
          </div>
        </Page>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
