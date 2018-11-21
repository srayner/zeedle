import React from "react";
import styled from "styled-components";
import { updateNewTaskContent, endAddTask } from "../../actions/card-actions";
import { connect } from "react-redux";
import Button from "../button";

const TextArea = styled.textarea`
  margin-bottom: 10px;
`;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: "lightgray";
  //display: flex;
`;

class NewTask extends React.Component {
  render() {
    return (
      <Container>
        <TextArea
          onChange={event => {
            this.props.onChange(this.props.column, event.target.value);
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            this.props.onClose(this.props.column);
          }}
        >
          Add Task
        </Button>
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
