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

export function startAddTask(list) {
  return {
    type: "START_ADD_TASK",
    payload: list
  };
}

export function cancelAddTask(list) {
  return {
    type: "CANCEL_ADD_TASK",
    payload: list
  };
}

export function endAddTask(list) {
  return dispatch => {
    return api.addTask(list.newTaskContent).then(response => {
      const newTask = response.data;
      newTask.id = newTask._id;
      delete newTask._id;

      const updatedList = appendTask(list, newTask.id);
      api.updateList(updatedList).then(() => {
        return dispatch({
          type: "ADD_TASK_END",
          payload: { list, newTask }
        });
      });
    });
  };
}

export function deleteTask(list, index) {
  return dispatch => {
    const taskId = list.taskIds[index];
    return api.deleteTask(taskId).then(() => {
      const updatedList = removeTask(list, index);
      api.updateList(updatedList).then(() => {
        return dispatch({
          type: "TASK_DELETE",
          payload: { list: updatedList, taskId }
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

export function updateNewTaskContent(list, content) {
  return {
    type: "UPDATE_NEW_TASK_CONTENT",
    payload: { list, content }
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
