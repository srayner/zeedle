import api from "../data/api";

export function loadData() {
  return dispatch => {
    dispatch(loadDataBegin());
    return api.getTasks().then(response => {
      console.log("response: " + response);
      dispatch(loadDataEnd(response.data));
    });
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
  return {
    type: "END_ADD_TASK",
    payload: column
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
