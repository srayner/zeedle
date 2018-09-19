import initialState from "../data/initial-data";

const uuid1 = require("uuid/v1");

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_BEGIN": {
      console.log("LOAD_DATA_BEGIN fired");
      return state;
    }

    case "LOAD_DATA_END": {
      const tasks = action.payload.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        acc[cur.id] = cur;
        return acc;
      }, {});

      const columns = {
        "column-1": {
          id: "column-1",
          title: "To do",
          taskIds: Object.keys(tasks),
          addingTask: false,
          newTaskContent: ""
        }
      };
      const newState = {
        ...state,
        tasks: tasks,
        columns: columns,
        columnOrder: ["column-1"]
      };

      return newState;
    }

    case "CARD_DRAG": {
      return onDragEnd(state, action.payload);
    }

    case "START_ADD_TASK": {
      const column = action.payload;
      const newColumn = { ...column, addingTask: true };
      const newColumns = { ...state.columns, [newColumn.id]: newColumn };
      const newState = { ...state, columns: newColumns };
      return newState;
    }

    case "END_ADD_TASK": {
      const column = action.payload;
      const id = uuid1();
      const newTask = { id: id, content: column.newTaskContent };
      const newTasks = { ...state.tasks, [id]: newTask };
      const newTaskIds = [...column.taskIds, id];
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

    case "CLOSE_MODAL": {
      return addCard(state, action.payload);
    }

    default:
      return state;
  }
};

function onDragEnd(state, result) {
  const { destination, source, draggableId, type } = result;
  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

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

function addCard(state, column) {
  const newTask = { id: "task-4", content: "new card" };
  const newTasks = { ...state.tasks, [newTask.id]: newTask };
  const newTaskIds = Array.from(column.taskIds).push(newTask.id);
  const newColumn = { ...column, taskIds: newTaskIds };
  const newColumns = { ...state.columns, [newColumn.id]: newColumn };
  const newState = { ...state, tasks: newTasks, columns: newColumns };
  return newState;
}

export default cardReducer;
