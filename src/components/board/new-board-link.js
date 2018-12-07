import styled from "styled-components";

const NewBoardLink = styled.div`
  box-sizing: border-box;
  margin: 0 20px;
  border-radius: 3px;
  padding: 8px;
  color: #6b808c;
  background-color: rgba(0, 0, 0, 0.2);
  width: 180px;
  height: 90px;
  flex: 0 0 auto;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-family: "Roboto", sans-serif;
  transition: background-color 85ms ease;
  &:hover {
    cursor: pointer;
    color: #17394d;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default NewBoardLink;
