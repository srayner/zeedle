import { moveColumn } from "../data/board";

const initialState = {
  addingList: false,
  editingTaskId: null,
  columnOrder: []
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_END": {
      const columns = action.payload.columns.reduce(function(acc, cur, i) {
        acc[cur._id] = cur;
        return acc;
      }, {});
      return { ...state, columnOrder: Object.keys(columns) };
    }
    case "OPEN_TASK_DETAIL": {
      return { ...state, editingTaskId: action.payload };
    }
    case "CLOSE_TASK_DETAIL": {
      return { ...state, editingTaskId: null };
    }
    case "COLUMN_MOVED": {
      const { source, destination, draggableId } = action.payload;
      const newState = moveColumn(
        state,
        source.index,
        destination.index,
        draggableId
      );
      return newState;
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
      const columnOrder = [...state.columnOrder, newList.id];
      return { ...state, columnOrder, addingList: false };
    }
    case "COLUMN_DELETE": {
      return action.payload.board;
    }
    default:
      return state;
  }
};

export default board;
