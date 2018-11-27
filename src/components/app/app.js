import React from "react";
import { loadData, addListStart, addListEnd } from "../../actions/board";
import { hideModal, onDragEnd } from "../../actions/card-actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardTitle from "../board/board-title";
import Column from "../column/column";
import TitleBar from "./title-bar";
import { connect } from "react-redux";
import NewColumnLink from "../column/new-column-link";
import NewList from "../column/new-list";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  newList() {
    if (this.props.addingList) {
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
    return (
      <div>
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <TitleBar>zeedle</TitleBar>
          <BoardTitle>Task List</BoardTitle>
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
                {this.props.columnOrder.map((columnId, index) => {
                  const column = this.props.columns[columnId];
                  return (
                    <InnerList
                      key={column.id}
                      column={column}
                      taskMap={this.props.tasks}
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
    tasks: state.tasks,
    columns: state.columns,
    columnOrder: state.board.columnOrder,
    addingList: state.board.addingList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    loadData: () => dispatch(loadData()),
    onDragEnd: result => dispatch(onDragEnd(result)),
    addListStart: () => dispatch(addListStart()),
    addListEnd: title => dispatch(addListEnd(title))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
