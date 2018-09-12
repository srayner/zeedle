export function onDragEnd(result) {
  return {
    type: "CARD_DRAG",
    payload: result
  };
}

export function addCard(column) {
  return {
    type: "CARD_ADD",
    payload: column
  };
}

export function closeModal() {
  return {
    type: "CLOSE_MODAL",
    payload: null
  };
}
