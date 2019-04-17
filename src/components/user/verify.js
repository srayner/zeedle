import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { verify } from "../../actions/user";

class Verify extends React.Component {
  componentDidMount() {
    const token = queryString.parse(this.props.location.search).token;
    if (token) {
      this.props.verify(token);
    }
  }

  render() {
    const message =
      this.props.verifyState === "success"
        ? "Your account was successfully verified and you are now logged in."
        : "Sorry, your account could not be verified.";
    return (
      <div>
        <h1>Verify account</h1>
        <p>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    verifyState: state.app.verifyState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verify: token => dispatch(verify(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify);
