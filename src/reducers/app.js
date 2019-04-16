const initialState = {
  addingList: false,
  boardMenuVisible: false,
  editingTaskId: null,
  flashMessage: null,
  token: null,
  addingBoard: false,
  deletingBoard: false,
  changingColour: false,
  changingBoardTitle: false,
  newBoardContent: "",
  newListTitle: "",
  updatedBoardTitle: "",
  profileMenuVisible: false,
  user: {
    username: "srayner296",
    displayName: "Steve Rayner",
    initials: "S R"
  },
  accessToken: null,
  refreshToken: null,
  verifyState: null
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_TASK_DETAIL": {
      return { ...state, editingTaskId: action.payload };
    }
    case "CLOSE_TASK_DETAIL": {
      return { ...state, editingTaskId: null };
    }
    case "ADD_LIST_START": {
      return { ...state, addingList: true };
    }
    case "ADD_LIST_UPDATE_CONTENT":
      return { ...state, newListTitle: action.payload };
    case "ADD_LIST_END":
    case "ADD_LIST_CANCEL": {
      return { ...state, addingList: false };
    }
    case "SHOW_BOARD_MENU": {
      return { ...state, boardMenuVisible: true };
    }
    case "HIDE_BOARD_MENU": {
      return { ...state, boardMenuVisible: false };
    }
    case "LOGIN": {
      const { token } = action.payload;
      return { ...state, token, flashMessage: null };
    }
    case "LOGIN_FAILED": {
      const { flashMessage } = action.payload;
      return { ...state, flashMessage };
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
    case "VERIFY_SUCCESS": {
      const { accessToken, refreshToken } = action.payload;
      return { ...state, accessToken, refreshToken, verifyState: "success" };
    }
    case "VERIFY_FAILED": {
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        verifyState: "failure"
      };
    }
    default:
      return state;
  }
};

export default app;
