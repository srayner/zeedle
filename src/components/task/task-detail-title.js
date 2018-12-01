import React from "react";
import styled from "styled-components";

const Title = styled.textarea`
  color: black;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: 0;
  margin-top: -6px;
  padding: 2px;
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 24px;
  resize: none;
`;

class TaskDetailTitle extends React.Component {
  myRef = React.createRef();

  componentDidMount() {
    this.calculateAndSetRows(this.myRef.current);
  }

  calculateAndSetRows(textArea) {
    textArea.rows = 1;
    const newRows = ~~(textArea.scrollHeight / 24);
    textArea.rows = newRows;
  }

  titleChange = textArea => {
    this.calculateAndSetRows(textArea);
    this.props.onTitleChange(textArea.value);
  };

  render() {
    const { value, onBlur } = this.props;
    return (
      <Title
        innerRef={this.myRef}
        value={value}
        onChange={event => this.titleChange(event.target)}
        onBlur={onBlur}
      />
    );
  }
}

export default TaskDetailTitle;
