import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./reducers/board";
import lists from "./reducers/lists";
import tasks from "./reducers/tasks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({ board, lists, tasks });
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
