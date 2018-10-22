import initialState from "../data/initial-data";
import { moveColumn } from "../data/board";

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      return state;
    }

    case "LOAD_DATA_END": {
      const tasks = action.payload.tasks.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        acc[cur.id] = cur;
        return acc;
      }, {});

      const columns = action.payload.columns.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        cur.addingTask = false;
        cur.newTaskContent = "";
        acc[cur.id] = cur;
        return acc;
      }, {});

      const newState = {
        ...state,
        tasks: tasks,
        columns: columns,
        columnOrder: Object.keys(columns)
      };

      return newState;
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

    case "COLUMN_UPDATED": {
      const column = action.payload.column;
      return {
        ...state,
        columns: {
          ...state.columns,
          [column.id]: column
        }
      };
    }

    case "COLUMNS_UPDATED": {
      const { sourceColumn, destinationColumn } = action.payload;
      return {
        ...state,
        columns: {
          ...state.columns,
          [sourceColumn.id]: sourceColumn,
          [destinationColumn.id]: destinationColumn
        }
      };
    }

    case "START_ADD_TASK": {
      const column = action.payload;
      const newColumn = { ...column, addingTask: true };
      const newColumns = { ...state.columns, [newColumn.id]: newColumn };
      const newState = { ...state, columns: newColumns };
      return newState;
    }

    case "END_ADD_TASK": {
      const column = action.column;
      const newTask = action.newTask;
      const newTasks = { ...state.tasks, [newTask.id]: newTask };
      const newTaskIds = [...column.taskIds, newTask.id];
      const newColumn = { ...column, taskIds: newTaskIds, addingTask: false };
      const newColumns = { ...state.columns, [newColumn.id]: newColumn };
      const newState = { ...state, tasks: newTasks, columns: newColumns };
      return newState;
    }

    case "UPDATE_NEW_TASK_CONTENT": {
      const newColumn = {
        ...action.payload.column,
        newTaskContent: action.payload.content
      };
      const newColumns = { ...state.columns, [newColumn.id]: newColumn };
      const newState = { ...state, columns: newColumns };
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
