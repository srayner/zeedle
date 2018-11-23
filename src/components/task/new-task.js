import React from "react";
import styled from "styled-components";
import {
  updateNewTaskContent,
  cancelAddTask,
  endAddTask
} from "../../actions/card-actions";
import { connect } from "react-redux";
import { Button, GrayButton, CloseButton } from "../button";

// get our fontawesome imports
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 38px;
  max-height: 200px;
  overflow: auto;
  padding: 8px;
  border-radius: 4px;
  border-color: #d3d3d3;
  margin-bottom: 8px;
  font-size: 14px;
  vertical-align: top;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #aaa;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d3d3d3;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d3d3d3;
  }
`;

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
