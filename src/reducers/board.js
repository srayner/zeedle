const initialState = {
  title: "Task List",
  addingList: false,
  editingTaskId: null,
  listIds: []
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_END": {
      let board = action.payload.board;
      board.id = board._id;
      delete board._id;
      board.listIds = board.columnIds;
      delete board.columnIds;
      return board;
    }
    case "OPEN_TASK_DETAIL": {
      return { ...state, editingTaskId: action.payload };
    }
    case "CLOSE_TASK_DETAIL": {
      return { ...state, editingTaskId: null };
    }
    case "BOARD_UPDATED": {
      return action.payload.board;
    }
    case "ADD_LIST_START": {
      return { ...state, addingList: true };
    }
    case "ADD_LIST_UPDATE_CONTENT": {
      return { ...state, newListContent: action.payload };
    }
    case "ADD_LIST_CANCEL": {
      return { ...state, addingList: false };
    }
    case "ADD_LIST_END": {
      const newList = action.payload;
      const listIds = [...state.listIds, newList.id];
      return { ...state, listIds, addingList: false };
    }
    case "LIST_DELETE": {
      return action.payload.board;
    }
    default:
      return state;
  }
};

export default board;
