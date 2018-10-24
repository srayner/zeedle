import api from "../data/api";
import { addTask, removeTask, moveTask, appendTask } from "../data/list.js";

export function loadData() {
  return dispatch => {
    dispatch(loadDataBegin());
    getBoardData().then(data => {
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

    if (type === "column") {
      // TODO: update backend via api
      dispatch({
        type: "COLUMN_MOVED",
        payload: {
          source,
          destination,
          draggableId
        }
      });
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    if (start === finish) {
      const column = moveTask(
        start,
        source.index,
        destination.index,
        draggableId
      );
      api.updateColumn(column).then(() => {
        dispatch({
          type: "COLUMN_UPDATED",
          payload: { column }
        });
      });
      return;
    }

    const sourceColumn = removeTask(start, source.index);
    const destinationColumn = addTask(finish, destination.index, draggableId);
    api
      .updateColumn(sourceColumn)
      .then(() => {
        api.updateColumn(destinationColumn);
      })
      .then(() => {
        dispatch({
          type: "COLUMNS_UPDATED",
          payload: { sourceColumn, destinationColumn }
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

      const updatedColumn = appendTask(column, newTask.id);
      api.updateColumn(updatedColumn).then(response => {
        return dispatch({
          type: "END_ADD_TASK",
          column: column,
          newTask: newTask
        });
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
