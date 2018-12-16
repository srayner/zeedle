import React from "react";
import LoginForm from "../ui/login-form";
import { signUp } from "../../actions/app";
import { connect } from "react-redux";

class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <LoginForm submitCaption="Sign up" onSubmit={this.props.onSubmit} />
      </div>
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
