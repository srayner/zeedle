import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { openTaskDetail, closeTaskDetail } from "../../actions/card-actions";
import { connect } from "react-redux";
import Modal from "../ui/modal";
import TaskDetail from "./task-detail";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgray" : "white")};
  display: flex;
`;

class Task extends React.Component {
  render() {
    const modal =
      this.props.editingTaskId === this.props.task.id ? (
        <Modal handleClose={this.props.closeHandler}>
          <TaskDetail task={this.props.task} column={this.props.column} />
        </Modal>
      ) : null;

    return (
      <React.Fragment>
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              isDragging={snapshot.isDragging}
              onClick={() => {
                this.props.clickHandler(this.props.task.id);
              }}
            >
              {this.props.task.title}
            </Container>
          )}
        </Draggable>

        {modal}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingTaskId: state.editingTaskId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeHandler: () => dispatch(closeTaskDetail()),
    clickHandler: taskId => dispatch(openTaskDetail(taskId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
