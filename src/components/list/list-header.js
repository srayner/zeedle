import React from "react";
import styled from "styled-components";
import { TightCloseButton } from "../ui/button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  padding: 8px;
  display: flex;
`;

const TextArea = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 30px;
  resize: none;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 700;
  font-size: 14px;
  min-height: 20px;
  padding: 4px 7px;
  resize: none;
  max-height: 256px;
  width: 100%;
  box-sizing: border-box;

  :focus {
    background: #fff;
    border: 1px solid #5ba4cf;
    box-shadow: 0 0 0 1px #5ba4cf;
  }
`;

class ListHeader extends React.Component {
  render() {
    return (
      <Container {...this.props.dragHandleProps}>
        <TextArea
          value={this.props.title}
          onChange={event => this.props.onTitleChange(event.target.value)}
          onBlur={() => this.props.onTitleBlur()}
        />
        <TightCloseButton
          onClick={() => {
            this.props.onDelete(this.props.index);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </TightCloseButton>
      </Container>
    );
  }
}

export default ListHeader;
