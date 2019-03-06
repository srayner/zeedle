import React from "react";
import Text from "./text";
import { SuccessButton } from "./button";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <label>Email</label>
        <Text onChange={event => this.handleChange(event, "email")} />
        <label>Password</label>
        <Text
          type="password"
          onChange={event => this.handleChange(event, "password")}
        />
        <SuccessButton onClick={this.handleSubmit}>
          {this.props.submitCaption}
        </SuccessButton>
      </form>
    );
  }
}

export default LoginForm;
