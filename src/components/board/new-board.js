import React from "react";
import Text from "../ui/text";
import { connect } from "react-redux";
import { Button } from "../ui/button";
import { endAddBoard, updateNewBoardContent } from "../../actions/app";

class NewBoard extends React.Component {
  render() {
    return (
      <div>
        <Text
          onChange={event =>
            this.props.updateNewBoardContent(event.target.value)
          }
        />
        <Button onClick={this.props.endAddBoard}>Add new board</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endAddBoard: () => dispatch(endAddBoard()),
    updateNewBoardContent: newContent =>
      dispatch(updateNewBoardContent(newContent))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewBoard);
