const lists = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      return state;
    }
    case "LOAD_DATA_END": {
      return action.payload.lists.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        cur.addingTask = false;
        cur.newTaskContent = "";
        acc[cur.id] = cur;
        return acc;
      }, {});
    }
    case "LIST_UPDATED": {
      const { list } = action.payload;
      return { ...state, [list.id]: list };
    }
    case "LISTS_UPDATED": {
      const { sourceList, destinationList } = action.payload;
      return {
        ...state,
        [sourceList.id]: sourceList,
        [destinationList.id]: destinationList
      };
    }
    case "START_ADD_TASK": {
      const list = action.payload;
      const newList = { ...list, addingTask: true };
      return { ...state, [newList.id]: newList };
    }
    case "CANCEL_ADD_TASK": {
      const list = action.payload;
      const newList = { ...list, addingTask: false };
      return { ...state, [newList.id]: newList };
    }
    case "ADD_TASK_END": {
      const { list, newTask } = action.payload;
      const newTaskIds = [...list.taskIds, newTask.id];
      const newList = { ...list, taskIds: newTaskIds, addingTask: false };
      return { ...state, [newList.id]: newList };
    }
    case "UPDATE_NEW_TASK_CONTENT": {
      const { list, content } = action.payload;
      const updatedList = { ...list, newTaskContent: content };
      return { ...state, [updatedList.id]: updatedList };
    }
    case "TASK_DELETE": {
      const { list } = action.payload;
      return { ...state, [list.id]: list };
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
