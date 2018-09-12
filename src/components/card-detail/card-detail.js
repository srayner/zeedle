import React from "react";
import "./card-detail.css";
import { closeModal } from "../../actions/card-actions";
import { connect } from "react-redux";

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
          <span onClick={this.props.closeModal} className="close">
            &times;
          </span>
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);
