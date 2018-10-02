import initialState from "../data/initial-data";

const uuid1 = require("uuid/v1");

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
        cur.taskIds = [];
        acc[cur.id] = cur;
        return acc;
      }, {});
      columns["5ba40165b2cb4c2330fb7bcd"].taskIds = Object.keys(tasks);

      const newState = {
        ...state,
        tasks: tasks,
        columns: columns,
        columnOrder: Object.keys(columns)
      };

      return newState;
    }

    case "CARD_DRAG": {
      const { destination, source, draggableId, type } = action.payload;
      if (!destination) {
        return state;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return state;
      }

      return onDragEnd(state, destination, source, draggableId, type);
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

function onDragEnd(state, destination, source, draggableId, type) {
  if (type === "column") {
    const newColumnOrder = Array.from(state.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);
    const newState = {
      ...state,
      columnOrder: newColumnOrder
    };
    return newState;
  }

  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId];
  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds
    };

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

  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(finish.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds
  };

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
