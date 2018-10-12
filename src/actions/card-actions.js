import api from "../data/api";
import { addTask, removeTask, moveTask } from "../data/list.js";

export function loadData() {
  return dispatch => {
    dispatch(loadDataBegin());
    return getBoardData().then(data => {
      dispatch(loadDataEnd(data));
    });
  };
}

async function getBoardData() {
  let tasks = await api.getTasks();
  let columns = await api.getColumns();
  return {
    tasks: tasks.data,
    columns: columns.data
  };
}

export function loadDataBegin() {
  return {
    type: "LOAD_DATA_BEGIN"
  };
}

export function loadDataEnd(response) {
  return {
    type: "LOAD_DATA_END",
    payload: response
  };
}

export function onDragEnd({ destination, source, draggableId, type }) {
  return (dispatch, getState) => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const state = getState();

    if (type == "column") {
      // update backend via api
      // dispatch COLUMN_DRAG
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    if (start === finish) {
      const newColumn = moveTask(
        start,
        source.index,
        destination.index,
        draggableId
      );
      api.updateColumn(newColumn).then(() => {
        dispatch({ type: "TASK_DRAG", source, destination, draggableId });
      });
      return;
    }

    const newStart = removeTask(start, source.index);
    const newFinish = addTask(finish, finish.index, draggableId);

    api
      .updateColumn(newStart)
      .then(() => {
        api.updateColumn(newFinish);
      })
      .then(() => {
        dispatch({
          type: "TASK_DRAG",
          source: source,
          destination: destination,
          draggableId: draggableId
        });
      });
  };
}

export function startAddTask(column) {
  return {
    type: "START_ADD_TASK",
    payload: column
  };
}

export function endAddTask(column) {
  return dispatch => {
    return api.addTask(column.newTaskContent).then(response => {
      const newTask = response.data;
      newTask.id = newTask._id;
      delete newTask._id;
      return dispatch({
        type: "END_ADD_TASK",
        column: column,
        newTask: newTask
      });
    });
  };
}

export function updateNewTaskContent(column, content) {
  return {
    type: "UPDATE_NEW_TASK_CONTENT",
    payload: { column, content }
  };
}

export function closeModal() {
  return {
    type: "CLOSE_MODAL",
    payload: null
  };
}
