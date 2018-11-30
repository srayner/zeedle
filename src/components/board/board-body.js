import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadData, addListStart, addListEnd } from "../../actions/board";
import { hideModal, onDragEnd } from "../../actions/card-actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NewColumnLink from "../column/new-column-link";
import NewList from "../column/new-list";
import Column from "../column/column";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  position: absolute;
  top: 42px;
  right: 8px;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 12px;
    width: 12px;
  }
  ::-webkit-scrollbar-button {
    display: block;
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.15);
    //border-radius: 6px;
  }
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class BoardBody extends React.Component {
  newList() {
    if (this.props.board.addingList) {
      return <NewList />;
    }
    return (
      <NewColumnLink
        onClick={() => {
          this.props.addListStart();
        }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add another list...
      </NewColumnLink>
    );
  }

  render() {
    const newList = this.newList();
    const { board, columns, tasks } = this.props;
    return (
      <div>
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {provided => (
              <Container
                {...provided.droppableProps}
                innerRef={provided.innerRef}
              >
                {board.columnOrder.map((columnId, index) => {
                  const column = columns[columnId];
                  return (
                    <InnerList
                      key={column.id}
                      column={column}
                      taskMap={tasks}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
                {newList}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    columns: state.columns,
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData()),
    addListStart: () => dispatch(addListStart()),
    addListEnd: title => dispatch(addListEnd(title)),
    hideModal: () => dispatch(hideModal()),
    onDragEnd: result => dispatch(onDragEnd(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBody);
