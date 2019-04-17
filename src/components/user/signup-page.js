import React from "react";
import LoginContainer from "./login-container";
import LoginForm from "../ui/login-form";
import { signUp } from "../../actions/app";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../ui/container";

class SignupPage extends React.Component {
  render() {
    return (
      <Container colour="white">
        <LoginContainer>
          <h1>Sign up</h1>
          <LoginForm submitCaption="Sign up" onSubmit={this.props.onSubmit} />
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </LoginContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(signUp(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
