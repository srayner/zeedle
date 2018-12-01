import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadData } from "../../actions/board";
import { hideModal, onDragEnd } from "../../actions/task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NewList from "../list/new-list";
import List from "../list/list";

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
    const { list, taskMap, index } = this.props;
    const tasks = list.taskIds.map(taskId => taskMap[taskId]);
    return <List list={list} tasks={tasks} index={index} />;
  }
}

class BoardBody extends React.Component {
  render() {
    const { board, lists, tasks } = this.props;
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
                  const list = lists[columnId];
                  return (
                    <InnerList
                      key={list.id}
                      list={list}
                      taskMap={tasks}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
                <NewList />
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
    lists: state.lists,
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData()),
    hideModal: () => dispatch(hideModal()),
    onDragEnd: result => dispatch(onDragEnd(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardBody);
