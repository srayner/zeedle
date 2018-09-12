import React from "react";
import { onDragEnd } from "../../actions/cardActions";

class App extends React.Component {
  render() {
    return (
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
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    columns: state.columns,
    columnOrder: state.columnOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDragEnd: result => dispatch(onDragEnd(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
