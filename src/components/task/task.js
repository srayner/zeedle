import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import {
  openTaskDetail,
  closeTaskDetail,
  deleteTask
} from "../../actions/task";
import { connect } from "react-redux";
import Modal from "../ui/modal";
import TaskDetail from "./task-detail";
import ButtonList from "../ui/button-list";
import {
  faArrowRight,
  faCopy,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgray" : "white")};
  display: flex;
`;

const ModalContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

class Task extends React.Component {
  render() {
    const actionButtons = [
      { caption: "Move", icon: faArrowRight },
      { caption: "Copy", icon: faCopy },
      {
        caption: "Delete",
        icon: faTrashAlt,
        clickHandler: () => {
          this.props.deleteHandler(this.props.column, this.props.index);
        }
      }
    ];

    const modal =
      this.props.editingTaskId === this.props.task.id ? (
        <Modal handleClose={this.props.closeHandler}>
          <ModalContainer>
            <TaskDetail task={this.props.task} column={this.props.column} />
            <ButtonList title="Actions" buttons={actionButtons} />
          </ModalContainer>
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
    editingTaskId: state.board.editingTaskId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeHandler: () => dispatch(closeTaskDetail()),
    clickHandler: taskId => dispatch(openTaskDetail(taskId)),
    deleteHandler: (column, index) => dispatch(deleteTask(column, index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
