import React from "react";
import Text from "../ui/text";
import { SuccessButton } from "../ui/button";

class ProfileForm extends React.Component {
  state = {
    fullname: "",
    initials: ""
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
        <label>Full Name</label>
        <Text onChange={event => this.handleChange(event, "fullname")} />
        <label>Initials</label>
        <Text onChange={event => this.handleChange(event, "initials")} />
        <SuccessButton onClick={this.handleSubmit}>Update</SuccessButton>
      </form>
    );
  }
}

export default ProfileForm;
