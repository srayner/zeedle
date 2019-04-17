import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./reducers/board";
import boards from "./reducers/boards";
import lists from "./reducers/lists";
import tasks from "./reducers/tasks";
import app from "./reducers/app";
import user from "./reducers/user";
import visibilityMenu from "./reducers/visibility-menu";
import { loadState, saveState } from "./data/local-storage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({
  app,
  boards,
  board,
  lists,
  tasks,
  user,
  visibilityMenu
});
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
