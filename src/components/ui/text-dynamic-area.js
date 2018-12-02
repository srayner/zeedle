import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
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
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  resize: none;
  :focus {
    background-color: white;
  }
`;

class TextDynamicArea extends React.Component {
  myRef = React.createRef();

  componentDidMount() {
    this.calculateAndSetRows(this.myRef.current);
  }

  calculateAndSetRows(textArea) {
    textArea.rows = 1;
    const newRows = ~~(textArea.scrollHeight / parseInt(this.props.lineHeight));
    textArea.rows = newRows;
  }

  contentChange = textArea => {
    this.calculateAndSetRows(textArea);
    this.props.onChange(textArea.value);
  };

  render() {
    const { fontSize, lineHeight, value, onBlur } = this.props;
    return (
      <TextArea
        fontSize={fontSize}
        lineHeight={lineHeight}
        innerRef={this.myRef}
        value={value}
        onChange={event => this.contentChange(event.target)}
        onBlur={onBlur}
      />
    );
  }
}

export default TextDynamicArea;
