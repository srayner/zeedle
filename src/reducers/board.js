import { moveColumn } from "../data/board";

const initialState = {
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
    default:
      return state;
  }
};

export default board;