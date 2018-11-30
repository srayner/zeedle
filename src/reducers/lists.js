const lists = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      return state;
    }
    case "LOAD_DATA_END": {
      return action.payload.columns.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        cur.addingTask = false;
        cur.newTaskContent = "";
        acc[cur.id] = cur;
        return acc;
      }, {});
    }
    case "COLUMN_UPDATED": {
      const column = action.payload.column;
      return { ...state, [column.id]: column };
    }
    case "COLUMNS_UPDATED": {
      const { sourceColumn, destinationColumn } = action.payload;
      return {
        ...state,
        [sourceColumn.id]: sourceColumn,
        [destinationColumn.id]: destinationColumn
      };
    }
    case "START_ADD_TASK": {
      const column = action.payload;
      const newColumn = { ...column, addingTask: true };
      return { ...state, [newColumn.id]: newColumn };
    }
    case "CANCEL_ADD_TASK": {
      const column = action.payload;
      const newColumn = { ...column, addingTask: false };
      return { ...state, [newColumn.id]: newColumn };
    }
    case "END_ADD_TASK": {
      const column = action.column;
      const newTask = action.newTask;
      const newTaskIds = [...column.taskIds, newTask.id];
      const newColumn = { ...column, taskIds: newTaskIds, addingTask: false };
      return { ...state, [newColumn.id]: newColumn };
    }
    case "UPDATE_NEW_TASK_CONTENT": {
      const newColumn = {
        ...action.payload.column,
        newTaskContent: action.payload.content
      };
      return { ...state, [newColumn.id]: newColumn };
    }
    case "TASK_DELETE": {
      const newColumn = action.payload.column;
      return { ...state, [newColumn.id]: newColumn };
    }
    case "ADD_LIST_END": {
      const newList = action.payload;
      return { ...state, [newList.id]: newList };
    }
    default:
      return state;
  }
};

export default lists;
