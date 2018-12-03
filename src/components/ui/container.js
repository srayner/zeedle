import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 54px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.backgroundColor};
`;

export default Container;
