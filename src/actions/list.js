import api from "../data/api";

function editListTitle(list, title) {
  const newList = { ...list, title };
  return {
    type: "COLUMN_UPDATED",
    payload: newList
  };
}
