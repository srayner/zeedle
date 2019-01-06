import initialState from "../data/visibility-menu";

const visibilityMenu = (state = initialState, action) => {
  switch (action.type) {
    case "VISIBILITY_MENU_SHOW": {
      const { position } = action.payload;
      return { ...state, visible: true, position };
    }
    case "VISIBILITY_MENU_HIDE": {
      return { ...state, visible: false };
    }
    default:
      return state;
  }
};

export default visibilityMenu;
