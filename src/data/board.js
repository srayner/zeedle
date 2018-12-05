export function moveList(board, oldIndex, newIndex, listId) {
  const listIds = Array.from(board.listIds);
  listIds.splice(oldIndex, 1);
  listIds.splice(newIndex, 0, listId);
  return { ...board, listIds };
}

export function removeListAtIndex(board, index) {
  const listIds = Array.from(board.listIds);
  listIds.splice(index, 1);
  return { ...board, listIds };
}

export function appendList(board, listId) {
  const listIds = [...board.listIds, listId];
  return { ...board, listIds };
}
