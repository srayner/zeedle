import api from "../data/api";
import { removeListAtIndex } from "../data/board";

export function loadBoards() {
  return dispatch => {
    getBoards().then(data => {
      dispatch(loadBoardsEnd(data));
    });
  };
}

export function loadData(boardId) {
  return dispatch => {
    dispatch(loadDataBegin());
    getBoardData(boardId).then(data => {
      dispatch(loadDataEnd(data));
    });
  };
}

async function getBoards() {
  const boards = await api.getBoards();
  return {
    boards: boards.data
  };
}

function loadBoardsEnd(response) {
  return {
    type: "LOAD_BOARDS_END",
    payload: response
  };
}

async function getBoardData(boardId) {
  const tasks = await api.getTasks();
  const columns = await api.getColumns(boardId);
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
    type: "ADD_LIST_CANCEL"
  };
}

export function addListEnd() {
  return (dispatch, getState) => {
    const title = getState().board.newListContent;
    return api.addList(title).then(response => {
      const newList = response.data;
      newList.id = newList._id;
      delete newList._id;
      dispatch({
        type: "ADD_LIST_END",
        payload: newList
      });
    });
  };
}

export function removeList(index) {
  return (dispatch, getState) => {
    const board = getState().board;
    const listId = board.columnOrder[index];
    return api.deleteList(listId).then(response => {
      const updatedBoard = removeListAtIndex(board, index);
      return dispatch({
        type: "COLUMN_DELETE",
        payload: { board: updatedBoard, listId: listId }
      });
    });
  };
}
