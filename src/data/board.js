export function moveColumn(board, oldIndex, newIndex, columnId) {
  const columnOrder = Array.from(board.columnOrder);
  columnOrder.splice(oldIndex, 1);
  columnOrder.splice(newIndex, 0, columnId);
  return { ...board, columnOrder };
}
