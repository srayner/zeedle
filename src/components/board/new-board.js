import React from "react";
import Text from "../ui/text";
import { connect } from "react-redux";
import { Button } from "../ui/button";
import { endAddBoard } from "../../actions/app";

class NewBoard extends React.Component {
  render() {
    return (
      <div>
        <Text />
        <Button onClick={() => this.props.endAddBoard()}>Add new board</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endAddBoard: () => dispatch(endAddBoard())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewBoard);
