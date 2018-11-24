import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./reducers/board";
import columns from "./reducers/columns";
import tasks from "./reducers/tasks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const rootReducer = combineReducers({ board, columns, tasks });
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
