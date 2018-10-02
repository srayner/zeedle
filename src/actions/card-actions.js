import api from "../data/api";

export function loadData() {
  return dispatch => {
    dispatch(loadDataBegin());
    return myFunction().then(data => {
      dispatch(loadDataEnd(data));
    });
  };
}

async function myFunction() {
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

export function onDragEnd(result) {
  return {
    type: "CARD_DRAG",
    payload: result
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
