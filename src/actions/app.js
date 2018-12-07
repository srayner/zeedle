export function startAddBoard() {
  return {
    type: "ADD_BOARD_START"
  };
}

export function cancelAddBoard() {
  return {
    type: "ADD_BOARD_CANCEL"
  };
}

export function endAddBoard() {
  return {
    type: "ADD_BOARD_END"
  };
}
