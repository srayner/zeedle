const initialState = {
  token: null,
  redirect: null,
  addingBoard: false,
  newBoardContent: "",
  profileMenuVisible: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { token, redirect } = action.payload;
      return { ...state, token, redirect };
    }
    case "LOGOUT": {
      return { ...state, token: null, profileMenuVisible: false };
    }
    case "SHOW_PROFILE_MENU": {
      return { ...state, profileMenuVisible: true };
    }
    case "HIDE_PROFILE_MENU": {
      return { ...state, profileMenuVisible: false };
    }
    case "ADD_BOARD_START": {
      return { ...state, addingBoard: true };
    }
    case "ADD_BOARD_CANCEL": {
      return { ...state, addingBoard: false };
    }
    case "ADD_BOARD_END": {
      return { ...state, addingBoard: false };
    }
    case "DELETE_BOARD_START": {
      return { ...state, deletingBoard: true };
    }
    case "DELETE_BOARD_CANCEL": {
      return { ...state, deletingoard: false };
    }
    case "DELETE_BOARD_END": {
      return { ...state, deletingBoard: false };
    }
    case "ADD_BOARD_UPDATE_CONTENT": {
      const { newContent } = action.payload;
      return { ...state, newBoardContent: newContent };
    }
    default:
      return state;
  }
};

export default app;
