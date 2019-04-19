import React from "react";
import ProfileHeader from "./profile-header";
import { connect } from "react-redux";
import { update } from "../../actions/user";
import Container from "../ui/container";
import ProfileContainer from "./profile-container";
import ProfileForm from "./profile-form";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  render() {
    const { token, user } = this.props;
    if (!token) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: "/profile" }
          }}
        />
      );
    }
    return (
      <Container colour="white">
        <ProfileContainer>
          <ProfileHeader {...user} />
          <ProfileForm user={user} onSubmit={this.props.update} />
        </ProfileContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: user => dispatch(update(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
