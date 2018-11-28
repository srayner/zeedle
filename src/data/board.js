export function moveColumn(board, oldIndex, newIndex, columnId) {
  const columnOrder = Array.from(board.columnOrder);
  columnOrder.splice(oldIndex, 1);
  columnOrder.splice(newIndex, 0, columnId);
  return { ...board, columnOrder };
}

export function removeListAtIndex(board, index) {
  const columnIds = Array.from(board.columnOrder);
  columnIds.splice(index, 1);
  return { ...board, columnOrder: columnIds };
}
