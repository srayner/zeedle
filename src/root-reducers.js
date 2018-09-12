import initialData from "./initial-data.js";

export default (initialData, action) => {
  switch (action.type) {
    case "ACTION_1":
      return { ...state };
    case "ACTION_2":
      return { ...state };
    default:
      return state;
  }
};
