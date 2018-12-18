const initialState = {
  token: null,
  addingBoard: false,
  newBoardContent: "",
  profileMenuVisible: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { token } = action.payload;
      return { ...state, token };
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
    case "ADD_BOARD_UPDATE_CONTENT": {
      const { newContent } = action.payload;
      return { ...state, newBoardContent: newContent };
    }
    default:
      return state;
  }
};

export default app;
