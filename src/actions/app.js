import api from "../data/api";

export function signUp(data) {
  return dispatch => {
    return api.signup(data).then(response => {});
  };
}

export function login(data) {
  return dispatch => {
    return api.login(data).then(response => {});
  };
}

export function startAddBoard() {
  return {
    type: "ADD_BOARD_START"
  };
}

export function cancelAddBoard() {
  return {
    type: "ADD_BOARD_CANCEL"
  };
}

export function endAddBoard() {
  return (dispatch, getState) => {
    const state = getState();
    return api.addBoard(state.app.newBoardContent).then(response => {
      let newBoard = response.data;
      newBoard.id = newBoard._id;
      delete newBoard._id;
      return dispatch({
        type: "ADD_BOARD_END",
        payload: { newBoard }
      });
    });
  };
}

export function updateNewBoardContent(newContent) {
  return {
    type: "ADD_BOARD_UPDATE_CONTENT",
    payload: { newContent }
  };
}
