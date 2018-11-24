import styled from "styled-components";

const TaskList = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 0 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightgreen" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

export default TaskList;
