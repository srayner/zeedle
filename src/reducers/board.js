const initialState = {
  id: null,
  listIds: []
};
const board = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA_END": {
      let board = action.payload.board;
      board.id = board._id;
      delete board._id;
      return board;
    }
    case "BOARD_UPDATED": {
      return action.payload.board;
    }
    case "ADD_LIST_END": {
      const newList = action.payload;
      const listIds = [...state.listIds, newList.id];
      return { ...state, listIds };
    }
    case "LIST_DELETE": {
      return action.payload.board;
    }
    default:
      return state;
  }
};

export default board;
