import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./root-reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
