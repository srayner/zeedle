export function addTask(list, index, taskId) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(index, 0, taskId);
  return { ...list, taskIds };
}

export function moveTask(list, oldIndex, newIndex, taskId) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(oldIndex, 1);
  taskIds.splice(newIndex, 0, taskId);
  return { ...list, taskIds };
}

export function removeTask(list, index) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(index, 1);
  return { ...list, taskIds };
}

export function appendTask(list, taskId) {
  const taskIds = [...list.taskIds, taskId];
  return { ...list, taskIds };
}
