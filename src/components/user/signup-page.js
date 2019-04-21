import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../actions/app";
import Container from "../ui/container";
import LoginContainer from "./login-container";
import LoginForm from "../ui/login-form";
import SignupSent from "./signup-sent";

class SignupPage extends React.Component {
  state = { submitted: false };

  onSubmit = data => {
    this.setState({ submitted: true });
    this.props.onSubmit(data);
  };

  render() {
    if (this.state.submitted) {
      return <SignupSent />;
    }
    return (
      <Container colour="white">
        <LoginContainer>
          <h1>Sign up</h1>
          <LoginForm submitCaption="Sign up" onSubmit={this.onSubmit} />
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
