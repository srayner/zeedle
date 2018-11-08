import React from "react";
import styled from "styled-components";
import { updateNewTaskContent, endAddTask } from "../../actions/card-actions";
import { connect } from "react-redux";
import { Button } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgray" : "white")};
  //display: flex;
`;

class NewTask extends React.Component {
  render() {
    return (
      <Container>
        <TextArea
          style={{ marginBottom: 10 }}
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
