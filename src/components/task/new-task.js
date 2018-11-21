import React from "react";
import styled from "styled-components";
import { updateNewTaskContent, endAddTask } from "../../actions/card-actions";
import { connect } from "react-redux";
import Button from "../button";

// get our fontawesome imports
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const CloseButton = styled.button`
  border: 1px solid #28a745;
  border-radius: 4px;
  margin: 0 5px;
  padding: 10px 0;
  width: 38px;
  font-size: 14px;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
`;

const MenuButton = styled.button`
  border: none;
  border-radius: 4px;
  margin: 0;
  padding: 10px 0;
  width: 38px;
  font-size: 14px;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: auto;

  :hover {
    background-color: #ccc;
  }
`;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: "lightgray";
  //display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class NewTask extends React.Component {
  render() {
    return (
      <Container>
        <TextArea
          rows="2"
          onChange={event => {
            this.props.onChange(this.props.column, event.target.value);
          }}
        />
        <ButtonContainer>
          <Button
            type="primary"
            onClick={() => {
              this.props.onClose(this.props.column);
            }}
          >
            Add Task
          </Button>
          <CloseButton>
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
    onClose: column => dispatch(endAddTask(column))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
