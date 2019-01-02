import React from "react";
import { connect } from "react-redux";
import Popup from "../ui/popup";
import Text from "../ui/text";
import { SuccessButton } from "../ui/button";
import Label from "../ui/label";
import {
  cancelChangeBoardTitle,
  updateChangeBoardTitle,
  endChangeBoardTitle
} from "../../actions/board";

const popupData = {
  title: "Rename Board",
  width: "250px",
  bodyPadding: "15px 0 10px 0",
  position: {
    top: "48px",
    left: "16px"
  }
};

class ChangeTitlePopup extends React.Component {
  onChange = event => {
    this.props.change(event.target.value);
  };

  onSubmit = event => {
    this.props.submit(this.props.title);
  };

  render() {
    return (
      <Popup {...popupData} onClose={this.props.cancel}>
        <Label>Title</Label>
        <Text onChange={this.onChange} value={this.props.title} />
        <SuccessButton onClick={this.onSubmit}>Rename</SuccessButton>
      </Popup>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.app.updatedBoardTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cancel: () => dispatch(cancelChangeBoardTitle()),
    change: newTitle => dispatch(updateChangeBoardTitle(newTitle)),
    submit: newTitle => dispatch(endChangeBoardTitle(newTitle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTitlePopup);
