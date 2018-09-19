import React from "react";
import { loadData, onDragEnd } from "../../actions/card-actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "../../components/column/column";
import CardDetail from "../../components/card-detail/card-detail";
import TitleBar from "../../components/title-bar/title-bar";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
`;

const Board = styled.h2`
  margin: 0;
  padding: 8px;
  color: white;
  font-weight: 400;
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
    const modal = this.props.editing ? <CardDetail /> : null;
    return (
      <div>
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <TitleBar>Zeedle</TitleBar>
          <Board>Task List</Board>
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
        {modal}
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
    loadData: () => dispatch(loadData()),
    onDragEnd: result => dispatch(onDragEnd(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
