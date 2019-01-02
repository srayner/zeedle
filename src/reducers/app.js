const initialState = {
  token: null,
  redirect: null,
  addingBoard: false,
  deletingBoard: false,
  changingColour: false,
  changingBoardTitle: false,
  newBoardContent: "",
  updatedBoardTitle: "",
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
      return { ...state, deletingBoard: false };
    }
    case "DELETE_BOARD_END": {
      return { ...state, deletingBoard: false };
    }
    case "ADD_BOARD_UPDATE_CONTENT": {
      const { newContent } = action.payload;
      return { ...state, newBoardContent: newContent };
    }
    case "START_CHANGE_COLOUR": {
      return { ...state, changingColour: true };
    }
    case "CANCEL_CHANGE_COLOUR": {
      return { ...state, changingColour: false };
    }
    case "END_CHANGE_COLOUR": {
      return { ...state, changingColour: false };
    }
    case "START_CHANGE_BOARD_TITLE": {
      console.log(action.payload);
      return {
        ...state,
        changingBoardTitle: true,
        updatedBoardTitle: action.payload.currentTitle
      };
    }
    case "UPDATE_CHANGE_BOARD_TITLE": {
      return { ...state, updatedBoardTitle: action.payload.newTitle };
    }
    case "CANCEL_CHANGE_BOARD_TITLE": {
      return { ...state, changingBoardTitle: false };
    }
    case "END_CHANGE_BOARD_TITLE": {
      return { ...state, changingBoardTitle: false };
    }
    default:
      return state;
  }
};

export default app;
