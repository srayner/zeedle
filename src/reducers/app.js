const initialState = {
  token: null,
  addingBoard: false,
  newBoardContent: ""
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { token } = action.payload;
      return { ...state, token };
    }
    case "LOGOUT": {
      return { ...state, token: null };
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
