import styled from "styled-components";

const TitleButton = styled.span`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  padding: 4px 8px;
  border: none;
  border-radius: 3px;
  height: 32px;
  min-width: 32px;
  float: left;
  margin-right: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  text-decoration: none;
  transition: background-color 20ms ease;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    color: white;
  }
  :focus {
    outline: none;
  }
`;

export default TitleButton;
