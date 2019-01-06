const initialState = {
  id: null,
  title: null,
  colour: null,
  visibility: null,
  listIds: [],
  addingList: false,
  editingTaskId: null,
  boardMenuVisible: false
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_END": {
      let board = action.payload.board;
      board.id = board._id;
      delete board._id;
      return {
        ...state,
        id: board.id,
        title: board.title,
        listIds: board.listIds,
        starred: board.starred,
        colour: board.colour,
        visibility: board.visibility
      };
    }
    case "SHOW_BOARD_MENU": {
      return { ...state, boardMenuVisible: true };
    }
    case "HIDE_BOARD_MENU": {
      return { ...state, boardMenuVisible: false };
    }
    case "OPEN_TASK_DETAIL": {
      return { ...state, editingTaskId: action.payload };
    }
    case "CLOSE_TASK_DETAIL": {
      return { ...state, editingTaskId: null };
    }
    case "BOARD_UPDATED": {
      const {
        id,
        title,
        listIds,
        starred,
        colour,
        visibility
      } = action.payload.board;
      return { ...state, id, title, listIds, starred, colour, visibility };
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
