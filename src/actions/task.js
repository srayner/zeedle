import api from "../data/api";
import { addTask, removeTask, moveTask, appendTask } from "../data/list.js";
import { moveList } from "../data/board";

export function showModal() {
  return {
    type: "TASK_MODAL_SHOW"
  };
}

export function hideModal() {
  return {
    type: "TASK_MODAL_HIDE"
  };
}

export function onDragEnd({ destination, source, draggableId, type }) {
  return (dispatch, getState) => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const state = getState();

    if (type === "list") {
      const updatedBoard = moveList(
        state.board,
        source.index,
        destination.index,
        draggableId
      );
      api.updateBoard(updatedBoard);
      dispatch({
        type: "BOARD_UPDATED",
        payload: { board: updatedBoard }
      });
      return;
    }

    const start = state.lists[source.droppableId];
    const finish = state.lists[destination.droppableId];
    if (start === finish) {
      const list = moveTask(
        start,
        source.index,
        destination.index,
        draggableId
      );
      api.updateList(list).then(() => {
        dispatch({
          type: "LIST_UPDATED",
          payload: { list }
        });
      });
      return;
    }

    const sourceList = removeTask(start, source.index);
    const destinationList = addTask(finish, destination.index, draggableId);
    api
      .updateList(sourceList)
      .then(() => {
        api.updateList(destinationList);
      })
      .then(() => {
        dispatch({
          type: "LISTS_UPDATED",
          payload: { sourceList, destinationList }
        });
      });
  };
}

export function startAddTask(column) {
  return {
    type: "START_ADD_TASK",
    payload: column
  };
}

export function cancelAddTask(column) {
  return {
    type: "CANCEL_ADD_TASK",
    payload: column
  };
}

export function endAddTask(column) {
  return dispatch => {
    return api.addTask(column.newTaskContent).then(response => {
      const newTask = response.data;
      newTask.id = newTask._id;
      delete newTask._id;

      const updatedColumn = appendTask(column, newTask.id);
      api.updateList(updatedColumn).then(response => {
        return dispatch({
          type: "END_ADD_TASK",
          column: column,
          newTask: newTask
        });
      });
    });
  };
}

export function deleteTask(column, index) {
  return dispatch => {
    const taskId = column.taskIds[index];
    return api.deleteTask(taskId).then(response => {
      const updatedColumn = removeTask(column, index);
      api.updateList(updatedColumn).then(response => {
        return dispatch({
          type: "TASK_DELETE",
          payload: { column: updatedColumn, taskId: taskId }
        });
      });
    });
  };
}

export function openTaskDetail(taskId) {
  return {
    type: "OPEN_TASK_DETAIL",
    payload: taskId
  };
}

export function closeTaskDetail() {
  return {
    type: "CLOSE_TASK_DETAIL",
    payload: null
  };
}
export function updateNewTaskContent(column, content) {
  return {
    type: "UPDATE_NEW_TASK_CONTENT",
    payload: { column, content }
  };
}

export function editTaskTitle(task, title) {
  const newTask = { ...task, title };
  return {
    type: "TASK_UPDATED",
    payload: { task: newTask }
  };
}

export function editTaskDescription(task, description) {
  const newTask = { ...task, description };
  return {
    type: "TASK_UPDATED",
    payload: { task: newTask }
  };
}

export function saveTask(task) {
  api.updateTask(task);
  return {
    type: "SAVING_TASK"
  };
}
