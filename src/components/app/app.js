import React from "react";
import { loadData, addColumnStart, addColumnEnd } from "../../actions/board";
import { hideModal, onDragEnd } from "../../actions/card-actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardTitle from "../board/board-title";
import Column from "../column/column";
import TitleBar from "./title-bar";
import { connect } from "react-redux";
import NewColumnLink from "../column/new-column-link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
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

  render() {
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
                <NewColumnLink
                  onClick={() => {
                    this.props.addColumnStart();
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} /> Add new column...
                </NewColumnLink>
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
    columnOrder: state.board.columnOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    loadData: () => dispatch(loadData()),
    onDragEnd: result => dispatch(onDragEnd(result)),
    addColumnStart: () => dispatch(addColumnStart()),
    addColumnEnd: () => dispatch(addColumnEnd())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
