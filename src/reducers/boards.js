const boards = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_BOARDS_END": {
      return action.payload.boards.reduce(function(acc, cur, i) {
        cur.id = cur._id;
        delete cur._id;
        acc[cur.id] = cur;
        return acc;
      }, {});
    }
    case "ADD_BOARD_END": {
      const { newBoard } = action.payload;
      return { ...state, [newBoard.id]: newBoard };
    }
    default:
      return state;
  }
};

export default boards;
