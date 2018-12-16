import React from "react";
import LoginForm from "../ui/login-form";
import { login } from "../../actions/app";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm submitCaption="Login" onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(login(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
