import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/app";
import Container from "../ui/container";
import LoginContainer from "./login-container";
import LoginForm from "../ui/login-form";
import ErrorMessage from "../ui/error-message";

class LoginPage extends React.Component {
  state = { referer: null };

  renderFlashMessage() {
    if (!this.props.flashMessage) {
      return null;
    }
    return <ErrorMessage>{this.props.flashMessage}</ErrorMessage>;
  }

  render() {
    const { token } = this.props;
    const referrer = this.props.location.state
      ? this.props.location.state.referrer
      : "/";
    if (token) {
      return <Redirect to={referrer} />;
    }
    const flashMessage = this.renderFlashMessage();
    return (
      <Container colour="white">
        <LoginContainer>
          <h1>Login</h1>
          {flashMessage}
          <LoginForm submitCaption="Login" onSubmit={this.props.onSubmit} />
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </LoginContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    flashMessage: state.app.flashMessage,
    token: state.user.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
