const initialState = {
  addingBoard: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOARD_START": {
      return { ...state, addingBoard: true };
    }
    case "ADD_BOARD_CANCEL": {
      return { ...state, addingBoard: false };
    }
    case "ADD_BOARD_END": {
      return { ...state, addingBoard: false };
    }
    default:
      return state;
  }
};

export default app;
