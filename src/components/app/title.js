import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 56px;
  padding: 8px;
  top: 0px;
  left: 0;
  right: 0;
  background-color: ${props => props.backgroundColour || "#205785"};
  z-index: -1;
`;

export default Title;
