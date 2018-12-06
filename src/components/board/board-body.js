import React from "react";
import { connect } from "react-redux";
import { loadData } from "../../actions/board";
import { hideModal, onDragEnd } from "../../actions/task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NewList from "../list/new-list";
import List from "../list/list";
import Page from "../ui/page";

class InnerList extends React.PureComponent {
  render() {
    console.log(this.props);
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
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <Page {...provided.droppableProps} innerRef={provided.innerRef}>
                {board.listIds.map((listId, index) => {
                  const list = lists[listId];
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
              </Page>
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
