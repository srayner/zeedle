import React from "react";
import "./EditCard.css";

class EditCard extends React.Component {
  state = {
    title: "",
    description: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {};

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <form>
            <span>Title</span>
            <input
              type="text"
              name="title"
              value={this.state.name}
              onChange={event => {
                this.onChange(event);
              }}
            />
            <span>Decription</span>
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={event => {
                this.onChange(event);
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditCard;
