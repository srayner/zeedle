import React from "react";
import styled from "styled-components";
import {
  updateNewTaskContent,
  cancelAddTask,
  endAddTask
} from "../../actions/card-actions";
import { connect } from "react-redux";
import { Button, GrayButton, CloseButton } from "../ui/button";
import TextArea from "../ui/text-area";
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = styled(GrayButton)`
  margin-left: auto;
`;

const Container = styled.div`
  border: none;
  padding: 0 8px;
  margin: 0;
  margin-bottom: 8px;
  background-color: "lightgray";
`;

const ButtonContainer = styled.div`
  margin: 0 -4px;
  display: flex;
  justify-content: space-between;
`;

class NewTask extends React.Component {
  render() {
    return (
      <Container>
        <TextArea
          rows="2"
          placeholder="Enter a title for this task..."
          onChange={event => {
            this.props.onChange(this.props.column, event.target.value);
          }}
        />
        <ButtonContainer>
          <Button
            type="primary"
            onClick={() => {
              this.props.onSubmit(this.props.column);
            }}
          >
            Add Task
          </Button>
          <CloseButton
            onClick={() => {
              this.props.onCancel(this.props.column);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <MenuButton>
            <FontAwesomeIcon icon={faEllipsisH} />
          </MenuButton>
        </ButtonContainer>
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
    onCancel: column => dispatch(cancelAddTask(column)),
    onSubmit: column => dispatch(endAddTask(column))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
