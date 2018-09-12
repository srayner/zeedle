import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardReducer from "./reducers/card-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  cardReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
