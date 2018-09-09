import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  margin: 8px;
  border: none;
  border-radius: 3px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? "darkgray" : "#e2e4e6")};
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightgreen" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Column;
