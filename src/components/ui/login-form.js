import React from "react";
import Text from "./text";
import { Button } from "./button";

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
        <Text onChange={event => this.handleChange(event, "email")} />
        <Text onChange={event => this.handleChange(event, "password")} />
        <Button onClick={this.handleSubmit}>{this.props.submitCaption}</Button>
      </form>
    );
  }
}

export default LoginForm;
