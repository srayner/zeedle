import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/app/app";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
