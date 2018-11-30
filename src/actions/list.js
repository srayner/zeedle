export function editListTitle(list, title) {
  const newList = { ...list, title };
  return {
    type: "COLUMN_UPDATED",
    payload: { column: newList }
  };
}
