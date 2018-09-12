export function onDragEnd(result) {
  return {
    type: "CARD_DRAG",
    payload: result
  };
}
