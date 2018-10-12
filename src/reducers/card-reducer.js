import initialState from "../data/initial-data";
import { addTask, removeTask, moveTask } from "../data/list.js";

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      console.log("LOAD_DATA_BEGIN fired");
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

    case "COLUMN_DRAG": {
      const { source, destination, draggableId } = action;
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...state,
        columnOrder: newColumnOrder
      };
      return newState;
    }

    case "TASK_DRAG": {
      return onDragTask(
        state,
        action.destination,
        action.source,
        action.draggableId
      );
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

function onDragTask(state, destination, source, draggableId) {
  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId];
  if (start === finish) {
    const newColumn = moveTask(
      start,
      source.index,
      destination.index,
      draggableId
    );

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    };

    return newState;
  }

  // moving from one column to another
  const newStart = removeTask(start, source.index);
  const newFinish = addTask(finish, finish.index, draggableId);
  const newState = {
    ...state,
    columns: {
      ...state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    }
  };
  return newState;
}

export default cardReducer;
