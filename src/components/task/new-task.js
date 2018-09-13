import React from "react";
import styled from "styled-components";
import { updateNewTaskContent, endAddTask } from "../../actions/card-actions";
import { connect } from "react-redux";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgray" : "white")};
  display: flex;
`;

const Input = styled.input`
  border: none;
`;

class NewTask extends React.Component {
  render() {
    return (
      <Container>
        <Input
          onChange={event => {
            this.props.onChange(this.props.column, event.target.value);
          }}
        />
        <button
          onClick={() => {
            this.props.onClose(this.props.column);
          }}
        >
          Add Task
        </button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (column, content) =>
      dispatch(updateNewTaskContent(column, content)),
    onClose: column => dispatch(endAddTask(column))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
