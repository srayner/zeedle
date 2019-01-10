import React from "react";
import styled from "styled-components";
import ProfileHeader from "./profile-header";
import { connect } from "react-redux";

const Container = styled.div``;

class Profile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Container>
        <ProfileHeader {...user} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.app.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
