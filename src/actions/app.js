import api from "../data/api";

export function signUp(data) {
  return dispatch => {
    return api.signup(data).then(response => {});
  };
}

export function login(data) {
  return dispatch => {
    return api
      .login(data)
      .then(response => {
        const user = response.data.user;
        return dispatch({
          type: "LOGIN",
          payload: { user }
        });
      })
      .catch(error => {
        console.log(error);
        return dispatch({
          type: "LOGIN_FAILED",
          payload: { flashMessage: "Invalid email or password." }
        });
      });
  };
}

export function logout() {
  return {
    type: "LOGOUT"
  };
}

export function showProfileMenu() {
  return {
    type: "SHOW_PROFILE_MENU"
  };
}

export function hideProfileMenu() {
  return {
    type: "HIDE_PROFILE_MENU"
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

export function startDeleteBoard() {
  return {
    type: "DELETE_BOARD_START"
  };
}

export function endDeleteBoard(boardId) {
  return dispatch => {
    api.deleteBoard(boardId);
    return dispatch({
      type: "DELETE_BOARD_END",
      payload: { boardId }
    });
  };
}

export function cancelDeleteBoard() {
  return {
    type: "DELETE_BOARD_CANCEL"
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
