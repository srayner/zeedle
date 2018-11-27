import React from "react";
import styled from "styled-components";
import { Button, CloseButton } from "../ui/button";
import Text from "../ui/text";
import {
  addListUpdateContent,
  addListCancel,
  addListEnd
} from "../../actions/board";
import { connect } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

class NewList extends React.Component {
  render() {
    return (
      <Container>
        <Text
          placeholder="Enter list title..."
          onChange={event => {
            this.props.onChange(event.target.value);
          }}
        />
        <ButtonContainer>
          <Button
            type="primary"
            onClick={() => {
              this.props.onSubmit();
            }}
          >
            Add List
          </Button>
          <CloseButton
            onClick={() => {
              this.props.onCancel();
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
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
    onChange: content => dispatch(addListUpdateContent(content)),
    onCancel: column => dispatch(addListCancel(column)),
    onSubmit: column => dispatch(addListEnd(column))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList);
