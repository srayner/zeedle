import api from "../data/api";
import { removeListAtIndex, appendList } from "../data/board";

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
  const lists = await api.getLists(boardId);
  const board = await api.getBoard(boardId);
  return {
    tasks: tasks.data,
    lists: lists.data,
    board: board.data
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

export function addListEnd(board) {
  return dispatch => {
    const title = board.newListContent;
    return api.addList(title).then(response => {
      const newList = response.data;
      newList.id = newList._id;
      delete newList._id;

      const updatedBoard = appendList(board, newList.id);
      api.updateBoard(updatedBoard).then(response => {
        return dispatch({
          type: "ADD_LIST_END",
          payload: newList
        });
      });
    });
  };
}

export function removeList(index) {
  return (dispatch, getState) => {
    const board = getState().board;
    const listId = board.listIds[index];
    return api.deleteList(listId).then(response => {
      const updatedBoard = removeListAtIndex(board, index);
      api.updateBoard(updatedBoard);
      return dispatch({
        type: "LIST_DELETE",
        payload: { board: updatedBoard, listId: listId }
      });
    });
  };
}

export function showBoardMenu() {
  return { type: "SHOW_BOARD_MENU" };
}

export function hideBoardMenu() {
  return { type: "HIDE_BOARD_MENU" };
}

export function starBoard(board, starred) {
  const updatedBoard = { ...board, starred };
  api.updateBoard(updatedBoard);
  return {
    type: "BOARD_UPDATED",
    payload: { board: updatedBoard }
  };
}

export function startChangeColour() {
  return {
    type: "START_CHANGE_COLOUR"
  };
}

export function cancelChangeColour() {
  return {
    type: "CANCEL_CHANGE_COLOUR"
  };
}

export function endChangeColour(board, colour) {
  const updatedBoard = { ...board, colour };
  api.updateBoard(updatedBoard);
  return dispatch => {
    dispatch({
      type: "END_CHANGE_COLOUR"
    });
    dispatch({
      type: "BOARD_UPDATED",
      payload: { board: updatedBoard }
    });
  };
}
