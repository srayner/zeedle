import React from "react";
import { connect } from "react-redux";
import { addListStart } from "../../actions/board";
import NewListLink from "./new-list-link";
import NewListControls from "./new-list-controls";

class NewList extends React.Component {
  render() {
    const { addingList, onClick } = this.props;
    if (addingList) {
      return <NewListControls />;
    }
    return <NewListLink onClick={onClick} />;
  }
}

const mapStateToProps = state => {
  return {
    addingList: state.board.addingList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(addListStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList);
