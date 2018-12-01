const tasks = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      return state;
    }
    case "LOAD_DATA_END": {
      return action.payload.tasks.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        acc[cur.id] = cur;
        return acc;
      }, {});
    }
    case "END_ADD_TASK": {
      const newTask = action.newTask;
      return { ...state, [newTask.id]: newTask };
    }
    case "TASK_DELETE": {
      const key = action.payload.taskId;
      const { [key]: value, ...newState } = state;
      return newState;
    }
    case "TASK_UPDATED": {
      const task = action.payload.task;
      return { ...state, [task.id]: task };
    }
    default:
      return state;
  }
};

export default tasks;
