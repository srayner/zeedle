import api from "../data/api";

export function loadData() {
  return dispatch => {
    dispatch(loadDataBegin());
    getBoardData().then(data => {
      dispatch(loadDataEnd(data));
    });
  };
}

async function getBoardData() {
  const tasks = await api.getTasks();
  const columns = await api.getColumns();
  return {
    tasks: tasks.data,
    columns: columns.data
  };
}

function loadDataBegin() {
  return {
    type: "LOAD_DATA_BEGIN"
  };
}

function loadDataEnd(response) {
  return {
    type: "LOAD_DATA_END",
    payload: response
  };
}

export function addListStart() {
  return {
    type: "ADD_LIST_START"
  };
}

export function addListUpdateContent(content) {
  return {
    type: "ADD_LIST_UPDATE_CONTENT",
    payload: content
  };
}

export function addListCancel() {
  return {
    type: "ADD_LIST_END"
  };
}

export function addListEnd() {
  return {
    type: "ADD_LIST_END"
  };
}
