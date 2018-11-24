import React from "react";
import { hideModal, loadData, onDragEnd } from "../../actions/card-actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardTitle from "../board/board-title";
import Column from "../column/column";
import TitleBar from "./title-bar";
import { connect } from "react-redux";

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
    columnOrder: state.columnOrder,
    editing: state.editing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    loadData: () => dispatch(loadData()),
    onDragEnd: result => dispatch(onDragEnd(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
