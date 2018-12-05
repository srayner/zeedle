import api from "../data/api";

export function editListTitle(list, title) {
  const newList = { ...list, title };
  return {
    type: "LIST_UPDATED",
    payload: { list: newList }
  };
}

export function saveList(list) {
  api.updateList(list);
  return {
    type: "SAVING_COLUMN"
  };
}
