import React from "react";
import LoginForm from "../ui/login-form";
import { login } from "../../actions/app";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    console.log(this.props);
    const { redirect } = this.props;
    const referrer = this.props.location.state.referrer;
    if (redirect && referrer) {
      return <Redirect to={referrer} />;
    }
    return (
      <div>
        <h1>Login</h1>
        <LoginForm submitCaption="Login" onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.redirect
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
