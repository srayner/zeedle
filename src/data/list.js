export function removeTask(list, index) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(index, 1);
  const newList = { ...list, taskIds };
  return newList;
}

export function addTask(list, index, taskId) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(index, 0, taskId);
  const newList = { ...list, taskIds };
  return newList;
}

export function moveTask(list, oldIndex, newIndex, taskId) {
  const taskIds = Array.from(list.taskIds);
  taskIds.splice(oldIndex, 1);
  taskIds.splice(newIndex, 0, taskId);
  const newList = { ...list, taskIds };
  return newList;
}
