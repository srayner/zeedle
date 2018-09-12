import initialState from "../data/initial-data";

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARD_DRAG":
      return onDragEnd(state, action.payload);
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
    this.setState(newState);
    return;
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
