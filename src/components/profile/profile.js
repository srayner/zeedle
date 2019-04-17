import React from "react";
import ProfileHeader from "./profile-header";
import { connect } from "react-redux";
import Container from "../ui/container";
import ProfileContainer from "./profile-container";
import ProfileForm from "./profile-form";

class Profile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Container colour="white">
        <ProfileContainer>
          <ProfileHeader {...user} />
          <ProfileForm />
        </ProfileContainer>
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
