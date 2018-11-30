import api from "../data/api";

export function editListTitle(list, title) {
  const newList = { ...list, title };
  return {
    type: "COLUMN_UPDATED",
    payload: { column: newList }
  };
}

export function saveList(list) {
  api.updateColumn(list);
  return {
    type: "SAVING_COLUMN"
  };
}
