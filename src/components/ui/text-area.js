import styled from "styled-components";

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

export default TextArea;
