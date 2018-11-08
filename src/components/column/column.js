import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../../components/task/task";
import { startAddTask, endAddTask } from "../../actions/card-actions";
import { connect } from "react-redux";
import NewTask from "../../components/task/new-task";
import ColumnHeader from "./column-header.js";

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

const TaskList = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 0 8px 8px 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightgreen" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

const AddCardLink = styled.div`
  padding: 8px;
  &:hover {
    color: red;
    cursor: pointer;
  }
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
    const column = this.props.column;
    const addTaskLink = (
      <AddCardLink
        onClick={() => {
          this.props.startAddTask(column);
        }}
      >
        Add new card...
      </AddCardLink>
    );

    const addTask = column.addingTask ? (
      <NewTask column={column} />
    ) : (
      addTaskLink
    );
    return (
      <Draggable draggableId={column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <ColumnHeader
              {...provided.dragHandleProps}
              title={this.props.column.title}
            />

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
            {addTask}
          </Container>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    startAddTask: column => dispatch(startAddTask(column)),
    endAddTask: column => dispatch(endAddTask(column))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
