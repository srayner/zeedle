import styled from "styled-components";

const NewColumnLink = styled.div`
  box-sizing: border-box;
  margin: 0 8px;
  border-radius: 3px;
  padding: 8px;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.2);
  width: 250px;
  height: 36px;
  transition: background-color 85ms ease;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default NewColumnLink;
