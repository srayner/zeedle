import React from "react";
import styled from "styled-components";
import {
  updateNewTaskContent,
  cancelAddTask,
  endAddTask
} from "../../actions/task";
import { connect } from "react-redux";
import { SuccessButton, GrayButton, CloseButton } from "../ui/button";
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
    const list = this.props.list;
    return (
      <Container>
        <TextArea
          rows="2"
          placeholder="Enter a title for this task..."
          onChange={event => {
            this.props.onChange(list, event.target.value);
          }}
        />
        <ButtonContainer>
          <SuccessButton
            type="primary"
            onClick={() => {
              this.props.onSubmit(list);
            }}
          >
            Add Task
          </SuccessButton>
          <CloseButton
            onClick={() => {
              this.props.onCancel(list);
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
    onChange: (list, content) => dispatch(updateNewTaskContent(list, content)),
    onCancel: list => dispatch(cancelAddTask(list)),
    onSubmit: list => dispatch(endAddTask(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
