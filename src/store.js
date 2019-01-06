import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./reducers/board";
import boards from "./reducers/boards";
import lists from "./reducers/lists";
import tasks from "./reducers/tasks";
import app from "./reducers/app";
import visibilityMenu from "./reducers/visibility-menu";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({
  app,
  boards,
  board,
  lists,
  tasks,
  visibilityMenu
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
